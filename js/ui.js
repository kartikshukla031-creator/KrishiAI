/* DARK MODE */

const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");

      themeBtn.innerHTML = "☀️";
    } else {
      localStorage.setItem("theme", "light");

      themeBtn.innerHTML = "🌙";
    }
  });
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");

  if (themeBtn) {
    themeBtn.innerHTML = "☀️";
  }
}

/* SMART FARMING TIPS */

const tips = [
  "Use drip irrigation to save water.",

  "Monitor crop health weekly.",

  "Use organic compost for better soil quality.",

  "Avoid overwatering crops.",

  "Early morning watering improves growth.",

  "Check leaves regularly for infections.",
];

const tipsBox = document.getElementById("tipsBox");

if (tipsBox) {
  setInterval(() => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];

    tipsBox.innerHTML = randomTip;
  }, 4000);
}
