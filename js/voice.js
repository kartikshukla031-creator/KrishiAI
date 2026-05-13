function startListening(){

  const output =
  document.getElementById("voiceOutput");

  output.innerHTML =
  "🎤 Listening...";

  const recognition =
  new(window.SpeechRecognition
  || window.webkitSpeechRecognition)();

  recognition.lang = "en-US";

  recognition.onresult = function(event){

    const text =
    event.results[0][0].transcript;

    output.innerHTML = `

      <h3>You Said:</h3>

      <p>${text}</p>

      <br>

      <h3>AI Response:</h3>

      <p>
        Smart farming recommendation generated successfully.
      </p>

    `;

  };

  recognition.start();

}