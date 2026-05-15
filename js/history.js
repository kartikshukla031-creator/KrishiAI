function loadHistory(){

  const history =

  JSON.parse(

    localStorage.getItem("krishi_history")

  ) || [];

  console.log(history);

}

loadHistory();