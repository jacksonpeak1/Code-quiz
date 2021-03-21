var startBtn = document.getElementById("start-btn");
var welcomeScreen = document.getElementById('welcome-screen');
var questionScreen = document.getElementById('question-screen');
var timer;
var time = 60;

startBtn.addEventListener("click", startGame);

//function to initiate game
function startGame(){
    console.log("start game function triggered");

    //hide welcome screen
    welcomeScreen.classList.add("hidden");

    //show the questions container
    questionScreen.classList.remove("hidden");

    //generate question
    generateQuestion();

    //set timer
    timer = setInterval(function() {
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
        title: "What is your favorite color1?",
        choices: ["red","blue","green","brown"],
        answer: "red"
    },
    {
        title: "What is your favorite color2?",
        choices: ["red","blue","green","brown"],
        answer: "blue"
    },
    {
        title: "What is your favorite color3?",
        choices: ["red","blue","green","brown"],
        answer: "green"
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
        <div class="question-choices-container">
            <div class="question-choices">${currentQuestion.choices[0]}</div>
            <div class="question-choices">${currentQuestion.choices[1]}</div>
            <div class="question-choices">${currentQuestion.choices[2]}</div>
            <div class="question-choices">${currentQuestion.choices[3]}</div>
        </div>
    `;

    //convert the question string into html and insert it into the page
    document.querySelector("#question-screen").innerHTML = questionMarkUp;

    var arrayChoices = document.querySelectorAll(".question-choices");
    
    for (let i = 0; i < arrayChoices.length; i++) {
        arrayChoices[i].addEventListener("click",function(event) {
            //check if the answer is correct
            if (event.target.textContent === currentQuestion.answer) {
                //reward
                score++;
            } else {
                //punishment
                time = time - 10;
            }
    
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
    document.querySelector("questions");

    //hide questions screen

    //use clear interval function to clear timer
    clearInterval(timer);

    //show score
}



//do the local storage and show on page