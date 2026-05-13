// CLOCK

setInterval(()=>{

  const now = new Date();

  document.getElementById("clock")
  .innerHTML =
  now.toLocaleTimeString();

},1000);



// DARK MODE

function toggleDarkMode(){

  document.body.classList.toggle("dark");

}



// FARMING TIPS

const tips = [

  "Use organic fertilizers",

  "Avoid overwatering",

  "Check soil moisture daily",

  "Morning watering is best"

];

const randomTip =
tips[Math.floor(Math.random()*tips.length)];

document.getElementById("tipBox")
.innerHTML = randomTip;