var startBtn = document.getElementById("start-btn");
var welcomeScreen = document.getElementById("welcome-screen");
var questionScreen = document.getElementById("question-screen");
var userInput = document.getElementById("initials");
var timer;
var time = 60;

startBtn.addEventListener("click", startGame);

//function to initiate game
function startGame() {
  console.log("start game function triggered");

  //hide welcome screen
  welcomeScreen.classList.add("hidden");

  //show the questions container
  questionScreen.classList.remove("hidden");

  //generate question
  generateQuestion();

  //set timer
  timer = setInterval(function () {
    //decrease time by 1
    time--;
    //show time
    document.querySelector("#time").textContent = time;
    //check we should end the game
    if (time <= 0) {
      end();
    }
  }, 1000);
}

var questions = [
  {
    title: "Which of the following is not a primitive data type?",
    choices: ["1. Boolean", "2. String", "3. Number", "4. Console"],
    answer: "4. Console",
  },
  {
    title: "What symbol is associated with arrays?",
    choices: ["1. []", "2. {}", "3. +", "4. >"],
    answer: "1. []",
  },
  {
    title:
      "Which of the following is used to loop through a block of code a number of times?",
    choices: ["1. function-loop", "2. object", "3. method", "4. for-loop"],
    answer: "4. for-loop",
  },
  {
    title: "Out of the following which number value does a index begin on?",
    choices: ["1. 0", "2. 1", "3. 2", "4. 3"],
    answer: "1. 0",
  },
  {
    title:
      "Which javascript method adds one or more elements to the end of an array and returns the new length of the array.",
    choices: ["1. last", "2. try", "3. push", "4. generate"],
    answer: "3. push",
  },
];

//keep track of question index
var questionIndex = 0;

//keep track of score
var score = 0;

function generateQuestion() {
  //get the right question based on index
  var currentQuestion = questions[questionIndex];

  //create the question string
  var questionMarkUp = `
        <h4 class="question-title">${currentQuestion.title}</h4>
        <button class="question-choices-container">
            <button class="question-choices">${currentQuestion.choices[0]}</button>
            <button class="question-choices">${currentQuestion.choices[1]}</button>
            <button class="question-choices">${currentQuestion.choices[2]}</button>
            <button class="question-choices">${currentQuestion.choices[3]}</button>
        </button>
    `;

  //convert the question string into html and insert it into the page
  document.querySelector("#question-screen").innerHTML = questionMarkUp;

  var arrayChoices = document.querySelectorAll(".question-choices");

  for (let i = 0; i < arrayChoices.length; i++) {
    arrayChoices[i].addEventListener("click", function (event) {
      // check if the answer is correct
      if (event.target.textContent === currentQuestion.answer) {
        //score increase
        score++;
        document.querySelector("#score").textContent = score;
        console.log(score);
      } else {
        //time deduction
        time = time - 10;
      }
      console.log(event.target.textContent);
      console.log(currentQuestion.answer);

      //show next question

      //increase the question index
      questionIndex++;

      //check if this the last question and end the quiz
      if (questionIndex === questions.length) {
        end();
      } else {
        generateQuestion();
      }
    });
  }
}

function end() {
  //show end-screen elements
  document.querySelector("#end-screen").classList.remove("hidden");

  //hide questions screen
  document.querySelector("#question-screen").classList.add("hidden");

  //use clear interval function to clear timer
  clearInterval(timer);

  //show score
  document.querySelector("#final-score").textContent = score;
}

document.querySelector("#submit").addEventListener("click", function () {
  // //get the user input

  var newScore;
  console.log(newScore);

  if (userInput.value.trim() !== "") {
    newScore = {
      user: userInput.value,
      score: score,
    };
    console.log(newScore);
  }

  if (localStorage.getItem("highScores")) {
    var scoresFromStorage = JSON.parse(localStorage.getItem("highScores"));
    console.log(scoresFromStorage);
  } else if (!localStorage.getItem("highScores") && newScore) {
    //if nothing in local storage, set first score
    localStorage.setItem('highScores', JSON.stringify([newScore]));
  }

  //build score object

  // //get high scores
  // var highScores =

  // console.log("highscores", highScores);

  // //add new score to high score
  // highScores.push(newScore);

  // //set the high scores again
  // window.localStorage.setItem("highScores",JSON.stringify(highScores));
  // // window.localStorage.setItem("highScores",JSON.stringify [0]);
});

// //do the local storage and show on page
// //when writing to local storage (setItem), JSON.stringify()
// var scores = [
//   { user: "user", score: 2 },
//   { user: "user", score: 32 },
//   df{ user: "user", score: 20 },
//   { user: "user", score: 10 },
// ];
// var stringifiedScores = JSON.stringify(scores);

// localStorage.setItem("scores", stringifiedScores);
// //when reading from local storage (getItem), JSON.parse()
// var scoresFromStorage = JSON.parse(localStorage.getItem("scores"));
