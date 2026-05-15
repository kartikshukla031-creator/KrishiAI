function loginUser(){

  const username =
  document.getElementById("username").value;

  const password =
  document.getElementById("password").value;

  if(username === "" || password === ""){

    alert("Please fill all fields");

    return;
  }

  localStorage.setItem("krishi_logged_in","true");

  localStorage.setItem("krishi_user",username);

  window.location.href = "dashboard.html";

}

/* AUTO LOGIN CHECK */

if(window.location.pathname.includes("dashboard")){

  const loggedIn =
  localStorage.getItem("krishi_logged_in");

  if(!loggedIn){

    window.location.href = "login.html";

  }

}