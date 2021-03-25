// function printHighscores() {
//   // Receive scores from localstorage or set to empty array
//   var highscores = JSON.parse(window.localStorage.getItem("highScores")) || [];
//   // sort highscores by score property in descending order
//   highscores.sort(function (a, b) {
//     return b.score - a.score;
//   });
//   highscores.forEach(function (score) {
//     // create li tag for each high score
//     var liTag = document.createElement("li");
//     liTag.textContent = score.user + " - " + score.score;
//     // display on page
//     var olEl = document.getElementById("highscores");
//     olEl.appendChild(liTag);
//   });
// }
// function clearHighscores() {
//   window.localStorage.removeItem("highscores");
//   window.location.reload();
// }
// clear.addEventListener("click", function() {
 
// {;

// // // run function when page loads
// printHighscores();

