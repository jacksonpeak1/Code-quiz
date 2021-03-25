var highScoresList = document.getElementById("highscores");
var clearButton = document.getElementById("clear");

function printHighscores() {
  var highScores = JSON.parse(window.localStorage.getItem("highScores"));

  for (i = 0; i < highScores.length; i++) {
    console.log(highScores[i]);
    var listItem = document.createElement("li");
    listItem.innerHTML = `User: ${highScores[i].user} <strong>score: ${highScores[i].score}</strong>`;
    highScoresList.append(listItem);
  }
}
printHighscores();

clearButton.addEventListener("click", function () {
  console.log("clear storage");
  localStorage.removeItem("highScores");
  highScoresList.innerHTML = ``
});
