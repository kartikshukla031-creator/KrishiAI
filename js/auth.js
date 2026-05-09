document.addEventListener("DOMContentLoaded", ()=>{

  const loginForm = document.getElementById("loginForm");

  if(loginForm){
    loginForm.addEventListener("submit",(e)=>{
      e.preventDefault();

      const username =
        document.getElementById("username").value;

      Storage.set("krishi_user", {
        username
      });

      window.location.href = "dashboard.html";
    });
  }

});