document.addEventListener("DOMContentLoaded", () => {
  const detectBtn = document.getElementById("detectBtn");

  if (detectBtn) {
    detectBtn.addEventListener("click", analyzePlant);
  }
});

async function analyzePlant() {
  const file =
    document.getElementById("plantImage").files[0];

  const resultBox =
    document.getElementById("resultBox");

  if (!file) {
    resultBox.innerHTML =
      "⚠️ Please upload plant image.";
    return;
  }

  resultBox.innerHTML =
    "🔍 Analyzing...";

  const base64 =
    await fileToBase64(file);

  try {
    const res = await fetch("/api/advice", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        prompt:`
Analyze this plant image.

Tell:
1 Plant name
2 Disease
3 Confidence
4 Cause
5 Treatment
6 Prevention

Simple English.
        `,
        image:{
          mimeType:file.type,
          data:base64
        }
      })
    });

    const data = await res.json();

    resultBox.innerHTML =
      formatAI(data.answer);

  } catch {
    resultBox.innerHTML =
      "❌ Analysis failed.";
  }
}

function fileToBase64(file){
  return new Promise(resolve=>{
    const reader = new FileReader();

    reader.onload = ()=>{
      resolve(
        reader.result.split(",")[1]
      );
    };

    reader.readAsDataURL(file);
  });
}

function formatAI(text){
  return text
    .replace(/\n/g,"<br>")
    .replace(/\*\*/g,"");
}