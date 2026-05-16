function saveHistory(data){

  let history =

  JSON.parse(

    localStorage.getItem(
      "krishi_history"
    )

  ) || [];

  history.unshift(data);

  localStorage.setItem(

    "krishi_history",

    JSON.stringify(history)

  );

  loadHistory();

}

function loadHistory(){

  const historyContainer =

  document.getElementById(
    "historyContainer"
  );

  if(!historyContainer) return;

  let history =

  JSON.parse(

    localStorage.getItem(
      "krishi_history"
    )

  ) || [];

  if(history.length === 0){

    historyContainer.innerHTML =
    "No history available.";

    return;

  }

  historyContainer.innerHTML = "";

  history.forEach((item,index)=>{

    historyContainer.innerHTML += `

      <div
        class="card"
        style="margin-bottom:20px;"
      >

        <h3>
          ${item.crop}
        </h3>

        <br>

        <p>
          Disease:
          ${item.disease}
        </p>

        <br>

        <p>
          Confidence:
          ${item.confidence}%
        </p>

        <br>

        <p>
          Treatment:
          ${item.treatment}
        </p>

        <br>

        <p>
          ${item.time}
        </p>

        <br>

        <button
          onclick="deleteHistory(${index})"
          class="login-btn"
        >

          Delete

        </button>

      </div>

    `;

  });

}

function deleteHistory(index){

  let history =

  JSON.parse(

    localStorage.getItem(
      "krishi_history"
    )

  ) || [];

  history.splice(index,1);

  localStorage.setItem(

    "krishi_history",

    JSON.stringify(history)

  );

  loadHistory();

}

window.addEventListener(
  "load",
  loadHistory
);