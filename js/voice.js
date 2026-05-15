function startVoiceAssistant(){

  const speech =
  new SpeechSynthesisUtterance(

    "Welcome to Krishi AI. Smart farming assistant activated."

  );

  speech.lang = "en-US";

  speech.rate = 1;

  speech.pitch = 1;

  speech.volume = 1;

  speechSynthesis.speak(speech);

}