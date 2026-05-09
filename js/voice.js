document.addEventListener("DOMContentLoaded",()=>{

  const voiceBtn =
    document.getElementById("voiceBtn");

  if(voiceBtn){
    voiceBtn.addEventListener(
      "click",
      startVoice
    );
  }

});

function startVoice(){

  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if(!SpeechRecognition){
    alert("Speech not supported");
    return;
  }

  const recognition =
    new SpeechRecognition();

  recognition.lang = "hi-IN";
  recognition.start();

  const btn =
    document.getElementById("voiceBtn");

  btn.textContent =
    "Listening... 🎤";

  recognition.onresult =
  async (e)=>{

    const text =
      e.results[0][0].transcript;

    const res =
      await fetch("/api/advice",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          prompt:
          `Answer in Hindi simply: ${text}`
        })
      });

    const data =
      await res.json();

    speakHindi(data.answer);

    btn.textContent =
      "Start Listening";
  };
}

function speakHindi(text){
  const utter =
    new SpeechSynthesisUtterance(text);

  utter.lang = "hi-IN";

  speechSynthesis.speak(utter);
}