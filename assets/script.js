var startScreen = document.querySelector("#gameStart");
var mainText = document.querySelector("#mainText");
var startBtn = document.querySelector("#startBtn");

var quizScreen = document.querySelector("#quiz");
var question = document.querySelector("#question");
var choice1 = document.querySelector("#option1");
var choice2 = document.querySelector("#option2");
var choice3 = document.querySelector("#option3");
var choice4 = document.querySelector("#option4");
var prevAnswer = document.querySelector("#prevAnswer");
var timer = document.querySelector("#timer");

var questionOption = document.querySelector(".questionOption");

var questionPool = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    option1: "<javascript>",
    option2: "<script>",
    option3: "<js>",
    option4: "<scripting>",
    correctAnswer: "<script>",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    option1: "In the <body> element",
    option2: "In the <head> element",
    option3: "Both are correct",
    option4: "Both are wrong",
    correctAnswer: "Both are correct",
  },
  {
    question: "How do you create a function in JavaScript?",
    option1: "function:myFunction()",
    option2: "function myFunction()",
    option3: "function = myFunction()",
    option4: "myFunction() : function",
    correctAnswer: "function = myFunction()",
  },
  {
    question: "Using ___ statements is how you check for a specific condition.",
    option1: "Select",
    option2: "If",
    option3: "Switch",
    option4: "For",
    correctAnswer: "If",
  },
  {
    question: 'How would you log "Hello!" to the console?',
    option1: "console.log(hello)",
    option2: 'console.log("Hello")',
    option3: 'console.log("Hello!")',
    option4: "console.log(Hello!)",
    correctAnswer: 'console.log("Hello!")',
  },
  {
    question: "Do you love pizza?",
    option1: "No",
    option2: "Not really",
    option3: "Nah",
    option4: "Obviously, who doesn't love pizza??",
    correctAnswer: "Obviously, who doesn't love pizza??",
  },
];

function randomNum(max) {
  return Math.floor(Math.random() * max);
}

var timeLeft = 90;

// start quiz
startBtn.addEventListener("click", function () {
  timer.textContent = timeLeft;
  var countDown = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(countDown);
    }
  }, 1000);

  startScreen.style.display = "none";
  quizScreen.style.display = "block";

  displayQuestion();
});

var currentQuestionIndex = 0;

function displayQuestion() {
  var currentQuestion = questionPool[currentQuestionIndex];

  question.textContent = currentQuestion.question;
  choice1.textContent = currentQuestion.option1;
  choice2.textContent = currentQuestion.option2;
  choice3.textContent = currentQuestion.option3;
  choice4.textContent = currentQuestion.option4;
}

var scoreScreen = document.querySelector("#scoreScreen");
var playerScore = document.querySelector("#playerScore");

function displayScore() {
  quizScreen.style.display = "none";
  scoreScreen.style.display = "block";

  playerScore.textContent = "Your score is " + timeLeft;
}

quizScreen.addEventListener("click", function (e) {
  var currentQuestion = questionPool[currentQuestionIndex];
  var optionChosen = e.target;

  if (optionChosen.textContent === currentQuestion.correctAnswer) {
    prevAnswer.textContent = "Correct!";
  } else {
    prevAnswer.textContent = "Wrong!";
    timeLeft -= 5;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex >= questionPool.length) {
    displayScore();
  } else {
    displayQuestion();
  }
});
