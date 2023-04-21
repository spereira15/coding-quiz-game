var mainText = document.querySelector("#mainText");
var startBtn = document.querySelector("#startBtn");
var quizScreen = document.querySelector("#quiz");

var question = document.querySelector("#question");
var choice1 = document.querySelector("#option1");
var choice2 = document.querySelector("#option2");
var choice3 = document.querySelector("#option3");
var choice4 = document.querySelector("#option4");

var questionOption = document.querySelector(".questionOption");

var questionPool = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    option1: "<javascript>",
    option2: "<script>",
    option3: "<js>",
    option4: "<scripting>",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    option1: "In the <body> element",
    option2: "In the <head> element",
    option3: "Both are correct",
    option4: "Both are wrong",
  },
  {
    question: "How do you create a function in JavaScript?",
    option1: "function:myFunction()",
    option2: "function myFunction()",
    option3: "function = myFunction()",
    option4: "myFunction() : function",
  },
  {
    question: "Using ___ statements is how you check for a specific condition.",
    option1: "Select",
    option2: "If",
    option3: "Switch",
    option4: "For",
  },
  {
    question: 'How would you log "Hello!" to the console?',
    option1: 'console.log(hello)',
    option2: 'console.log("Hello")',
    option3: 'console.log("Hello!")',
    option4: 'console.log(Hello!)',
  },
  {
    question: "Do you love pizza?",
    option1: "No",
    option2: "Not really",
    option3: "Nah",
    option4: "Obviously, who doesn't love pizza??",
  },
];

function randomNum(max) {
  return Math.floor(Math.random() * max);
}

startBtn.addEventListener("click", function () {
  mainText.style.display = "none";
  startBtn.style.display = "none";
  quizScreen.style.display = "block";

  question.textContent = questionPool[0].question;
  choice1.textContent = questionPool[0].option1;
  choice2.textContent = questionPool[0].option2;
  choice3.textContent = questionPool[0].option3;
  choice4.textContent = questionPool[0].option4;
});

quizScreen.addEventListener("click", function(e) {
    var optionChosen = e.target

    if (optionChosen.textContent === "right answer") {
        console.log("correct answer!")
    } else {
        console.log("wrong answer!")
    }

    question.textContent = questionPool[1].question;
  choice1.textContent = questionPool[1].option1;
  choice2.textContent = questionPool[1].option2;
  choice3.textContent = questionPool[1].option3;
  choice4.textContent = questionPool[1].option4;
})

