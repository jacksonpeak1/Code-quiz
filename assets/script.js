var startBtn = document.getElementById("start-btn")
var welcomeScreen = document.getElementById('welcome-screen')
var questionScreen = document.getElementById('question-screen')

startBtn.addEventListener("click", startGame)

function startGame(){
    console.log("start game function triggered")
    welcomeScreen.classList.add("hidden")
    questionScreen.classList.remove("hidden")
}