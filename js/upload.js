async function analyzePlant(){

  const imageInput =
  document.getElementById("plantImage");

  const resultBox =
  document.getElementById("resultBox");

  if(imageInput.files.length === 0){

    resultBox.innerHTML =
    "Please upload image first.";

    return;

  }

  resultBox.innerHTML =
  "Analyzing crop with AI...";

  const file =
  imageInput.files[0];

  const reader =
  new FileReader();

  reader.readAsDataURL(file);

  reader.onload = async ()=>{

    try{

      const response =
      await fetch("/api/plant-analysis",{

        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify({

          image:reader.result

        })

      });

      const data =
      await response.json();

      if(data.success){

        resultBox.innerHTML = `

          <strong>${data.result}</strong>

          <br><br>

          ✅ AI analysis completed successfully.

        `;

        saveHistory(data.result);

      }

      else{

        resultBox.innerHTML =
        "Analysis failed.";

      }

    }

    catch(error){

      resultBox.innerHTML =
      "Server error occurred.";

    }

  };

}

/* SAVE HISTORY */

function saveHistory(result){

  let history =

  JSON.parse(

    localStorage.getItem("krishi_history")

  ) || [];

  history.unshift({

    result,

    time:new Date().toLocaleString()

  });

  localStorage.setItem(

    "krishi_history",

    JSON.stringify(history)

  );

}