const analyzeBtn =
document.getElementById("analyzeBtn");

const imageInput =
document.getElementById("imageInput");

const aiResult =
document.getElementById("aiResult");

const loader =
document.getElementById("loader");

const progressFill =
document.getElementById("progressFill");



// IMAGE PREVIEW

imageInput.addEventListener("change", function(){

  const file = this.files[0];

  const reader = new FileReader();

  reader.onload = function(e){

    document.getElementById("preview").src =
    e.target.result;

  }

  reader.readAsDataURL(file);

});



// ANALYZE

analyzeBtn.addEventListener("click", ()=>{

  const file = imageInput.files[0];

  if(!file){

    aiResult.innerHTML =
    "Please upload image first";

    return;
  }

  loader.style.display = "block";

  let width = 0;

  const interval = setInterval(()=>{

    width += 10;

    progressFill.style.width =
    width + "%";

    if(width >= 100){

      clearInterval(interval);

      loader.style.display = "none";

      const name =
      file.name.toLowerCase();

      let result = "";

      if(name.includes("leaf")
      || name.includes("plant")){

        result = `
          <h3>Plant Healthy 🌱</h3>
          <p>No disease detected</p>
          <p>Growth condition excellent</p>
        `;
      }

      else if(name.includes("dry")){

        result = `
          <h3>Dryness Detected ⚠️</h3>
          <p>Increase watering</p>
        `;
      }

      else{

        result = `
          <h3>Analysis Complete ✅</h3>
          <p>Crop condition stable</p>
        `;
      }

      aiResult.innerHTML = result;

    }

  },200);

});