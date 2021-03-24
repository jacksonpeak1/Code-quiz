var startBtn = document.getElementById("start-btn");
var welcomeScreen = document.getElementById("welcome-screen");
var questionScreen = document.getElementById("question-screen");
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
    choices: ["Boolean", "String", "Number", "Console"],
    answer: "Console",
  },
  {
    title: "What symbol is associated with arrays?",
    choices: ["[]", "{}", "+", ">"],
    answer: "[]",
  },
  {
    title:
      "Which of the following is used to loop through a block of code a number of times?",
    choices: ["for-loop", "object", "method", "function-loop"],
    answer: "for-loop",
  },
  {
    title:
      "Out of the following which number value does a index begin on?",
    choices: ["0", "1", "2", "3",],
    answer: "0",
  },
  {
    title:
      "Which javascript method adds one or more elements to the end of an array and returns the new length of the array.",
    choices: ["push", "try", "last", "generate",],
    answer: "push",
  }
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
        //reward
        score++;
        document.querySelector("#score").textContent = score;
        console.log(score);
      } else {
        //punishment
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

document.querySelector("#submit").addEventListener("click", function() {
  //get the user input
  var userInput = document.querySelector("#initials").value;

  //get high scores
  var highScores = 
  //if (window.localStorage.getItem("highScores")) {
    //JSON.parse(
      window.localStorage.getItem("highScores") || []
     // );
  //}

  console.log("highscores", highScores);

  //build score object
  var newScore = {
    user: userInput,
    score: score
  };
  
  //add new score to high score
  highScores.push(newScore);

  //set the high scores again
  window.localStorage.setItem("highScores",JSON.stringify(highScores));

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
