async function analyzePlant() {

  const fileInput =
    document.getElementById("plantImage");

  const resultBox =
    document.getElementById("resultBox");

  if (!fileInput.files.length) {

    resultBox.innerHTML =
      "Please upload an image.";

    return;
  }

  const file = fileInput.files[0];

  resultBox.innerHTML =
    "Analyzing plant...";

  const reader = new FileReader();

  reader.onloadend = async () => {

    try {

      const response = await fetch(
        "/api/plant-analysis",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({
            image: reader.result
          })
        }
      );

      const data =
        await response.json();

      if (data.success) {

        resultBox.innerHTML = `
          <h3>
            🌱 ${data.plant}
          </h3>

          <p>
            Confidence:
            ${data.confidence}
          </p>

          <p>
            AI plant analysis completed successfully.
          </p>
        `;

      } else {

        resultBox.innerHTML =
          "No plant identified.";

      }

    } catch (error) {

      resultBox.innerHTML =
        "Analysis failed.";

      console.error(error);

    }

  };

  reader.readAsDataURL(file);

}