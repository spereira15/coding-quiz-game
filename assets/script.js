var mainText = document.querySelector("#mainText");
var startBtn = document.querySelector("#startBtn");
var quizScreen = document.querySelector("#quiz");

var question = document.querySelector("#question");
var choice1 = document.querySelector("#option1");
var choice2 = document.querySelector("#option2");
var choice3 = document.querySelector("#option3");
var choice4 = document.querySelector("#option4");

var questionPool = [
  {
    question: "Question 1",
    option1: "Example 1.1",
    option2: "Example 1.2",
    option3: "Example 1.3",
    option4: "Example 1.4",
  },
  {
    question: "Question 2",
    option1: "Example 2.1",
    option2: "Example 2.2",
    option3: "Example 2.3",
    option4: "Example 2.4",
  },
  {
    question: "Question 3",
    option1: "Example 3.1",
    option2: "Example 3.2",
    option3: "Example 3.3",
    option4: "Example 3.4",
  },
  {
    question: "Question 4",
    option1: "Example 4.1",
    option2: "Example 4.2",
    option3: "Example 4.3",
    option4: "Example 4.4",
  },
  {
    question: "Question 5",
    option1: "Example 5.1",
    option2: "Example 5.2",
    option3: "Example 5.3",
    option4: "Example 5.4",
  },
  {
    question: "Question 6",
    option1: "Example 6.1",
    option2: "Example 6.2",
    option3: "Example 6.3",
    option4: "Example 6.4",
  },
];

function randomNum(max) {
  return Math.floor(Math.random() * max);
}

startBtn.addEventListener("click", function () {
  mainText.style.display = "none";
  startBtn.style.display = "none";
  quizScreen.style.display = "block";

  var randomIndex = randomNum(questionPool.length);
  var randomQuestion = questionPool[randomIndex];

  question.textContent = randomQuestion.question;
  choice1.textContent = randomQuestion.option1;
  choice2.textContent = randomQuestion.option2;
  choice3.textContent = randomQuestion.option3;
  choice4.textContent = randomQuestion.option4;
});
