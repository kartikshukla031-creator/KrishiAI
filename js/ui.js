document.addEventListener("DOMContentLoaded", ()=>{

  const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.getElementById("sidebar");
  const sidebarToggle = document.getElementById("sidebarToggle");
  const themeToggle = document.getElementById("themeToggle");

  if(menuBtn){
    menuBtn.addEventListener("click", ()=>{
      const nav = document.getElementById("navLinks");
      if(nav){
        nav.style.display =
          nav.style.display === "flex" ? "none" : "flex";
      }
    });
  }

  if(sidebarToggle && sidebar){
    sidebarToggle.addEventListener("click", ()=>{
      sidebar.classList.toggle("show");
    });
  }

  if(themeToggle){
    themeToggle.addEventListener("click", ()=>{
      document.body.classList.toggle("dark");

      themeToggle.textContent =
        document.body.classList.contains("dark")
          ? "☀️"
          : "🌙";
    });
  }

});