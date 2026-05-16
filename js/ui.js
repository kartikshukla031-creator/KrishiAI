const themeToggle =
document.getElementById("themeToggle");

const darkToggle =
document.getElementById("darkToggle");

function enableDarkMode(){

  document.body.classList.add(
    "dark-mode"
  );

  localStorage.setItem(
    "krishi_theme",
    "dark"
  );

  if(darkToggle){

    darkToggle.classList.add(
      "active"
    );

  }

}

function disableDarkMode(){

  document.body.classList.remove(
    "dark-mode"
  );

  localStorage.setItem(
    "krishi_theme",
    "light"
  );

  if(darkToggle){

    darkToggle.classList.remove(
      "active"
    );

  }

}

window.addEventListener("load",()=>{

  const savedTheme =
  localStorage.getItem(
    "krishi_theme"
  );

  if(savedTheme === "dark"){

    enableDarkMode();

  }

});


if(themeToggle){

  themeToggle.addEventListener(
    "click",
    ()=>{

      if(
        document.body.classList.contains(
          "dark-mode"
        )
      ){

        disableDarkMode();

      }
      else{

        enableDarkMode();

      }

    }
  );

}

if(darkToggle){

  darkToggle.addEventListener(
    "click",
    ()=>{

      darkToggle.classList.toggle(
        "active"
      );

      if(
        document.body.classList.contains(
          "dark-mode"
        )
      ){

        disableDarkMode();

      }
      else{

        enableDarkMode();

      }

    }
  );

}

function showSection(sectionId){

  const sections = [

    "dashboardSection",

    "historySection",

    "settingsSection",

    "weatherSection",

    "voiceSection",

    "diseaseSection"

  ];

  sections.forEach((id)=>{

    const section =
    document.getElementById(id);

    if(section){

      section.style.display =
      "none";

    }

  });

  const activeSection =
  document.getElementById(sectionId);

  if(activeSection){

    activeSection.style.display =
    "block";

  }

}