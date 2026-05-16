function startVoiceAssistant(){

  const speech = new SpeechSynthesisUtterance(

    "Welcome to Krishi AI smart farming assistant."

  );

  speech.lang = "en-US";

  speech.volume = 1;

  speech.rate = 1;

  speech.pitch = 1;

  window.speechSynthesis.speak(
    speech
  );

}