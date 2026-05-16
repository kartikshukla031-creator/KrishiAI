function loginUser(){

  const username =
  document.getElementById("username").value;

  const password =
  document.getElementById("password").value;

  const remember =
  document.getElementById("rememberMe");

  if(username === "" || password === ""){

    alert("Please fill all fields");

    return;

  }

  localStorage.setItem(
    "krishi_username",
    username
  );

  sessionStorage.setItem(
    "krishi_logged_in",
    "true"
  );

  if(remember.checked){

    localStorage.setItem(
      "remember_user",
      "true"
    );

  }
  else{

    localStorage.removeItem(
      "remember_user"
    );

  }

  window.location.href =
  "dashboard.html";

}

window.addEventListener("load",()=>{

  if(
    window.location.pathname.includes(
      "dashboard.html"
    )
  ){

    const loggedIn =
    sessionStorage.getItem(
      "krishi_logged_in"
    );

    if(loggedIn !== "true"){

      window.location.href =
      "login.html";

    }

  }

});


function logoutUser(){

  sessionStorage.removeItem(
    "krishi_logged_in"
  );

  window.location.href =
  "login.html";

}