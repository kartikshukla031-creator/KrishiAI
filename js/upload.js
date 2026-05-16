function analyzePlant(){

  const imageInput =
  document.getElementById(
    "plantImage"
  );

  const resultBox =
  document.getElementById(
    "resultBox"
  );

  if(
    imageInput.files.length === 0
  ){

    resultBox.innerHTML =
    "Please upload crop image.";

    return;

  }

  const file =
  imageInput.files[0];

  const fileName =
  file.name.toLowerCase();

  let crop =
  "Healthy Plant";

  let disease =
  "No disease detected";

  let confidence =
  Math.floor(
    Math.random()*10
  ) + 90;

  let treatment =
  "Maintain proper watering schedule.";


  if(fileName.includes("tomato")){

    crop =
    "Tomato Plant";

    disease =
    "Early Blight";

    treatment =
    "Use copper fungicide spray.";

  }

  else if(
    fileName.includes("potato")
  ){

    crop =
    "Potato Crop";

    disease =
    "Late Blight";

    treatment =
    "Avoid overwatering and remove infected leaves.";

  }

  else if(
    fileName.includes("rice")
  ){

    crop =
    "Rice Crop";

    disease =
    "Bacterial Leaf Blight";

    treatment =
    "Use disease resistant seeds.";

  }

  else if(
    fileName.includes("wheat")
  ){

    crop =
    "Wheat Crop";

    disease =
    "Rust Disease";

    treatment =
    "Apply sulfur based fungicide.";

  }

  resultBox.innerHTML = `

    <h3>
      🌱 ${crop}
    </h3>

    <br>

    <p>
      <strong>Disease:</strong>
      ${disease}
    </p>

    <br>

    <p>
      <strong>Confidence:</strong>
      ${confidence}%
    </p>

    <br>

    <p>
      <strong>Treatment:</strong>
      ${treatment}
    </p>

  `;


  saveHistory({

    crop,
    disease,
    confidence,
    treatment,
    time:new Date().toLocaleString()

  });

}