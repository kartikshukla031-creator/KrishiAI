function clearAllHistory(){

  localStorage.removeItem(
    "krishi_history"
  );

  loadHistory();

  alert(
    "History Cleared"
  );

}

const toggles =

document.querySelectorAll(
  ".toggle-switch"
);

toggles.forEach((toggle)=>{

  toggle.addEventListener(
    "click",
    ()=>{

      toggle.classList.toggle(
        "active"
      );

    }
  );

});