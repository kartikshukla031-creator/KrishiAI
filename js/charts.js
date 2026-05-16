function generateAnalytics(){

  const analyticsCards =

  document.querySelectorAll(
    ".progress-fill"
  );

  analyticsCards.forEach((card)=>{

    const randomWidth =

    Math.floor(
      Math.random()*20
    ) + 70;

    card.style.width =
    randomWidth + "%";

  });

}


setInterval(()=>{

  generateAnalytics();

},4000);

window.addEventListener(
  "load",
  generateAnalytics
);