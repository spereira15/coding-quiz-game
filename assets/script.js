var mainText = document.querySelector("#mainText");
var startBtn = document.querySelector("#startBtn");
var quizScreen = document.querySelector("#quiz");

var questionPool = {
  question1: {
    question: "Question 1",
    option1: "Example 1.1",
    option2: "Example 1.2",
    option3: "Example 1.3",
    option4: "Example 1.4",
  },
  question2: {
    question: "Question 2",
    option1: "Example 2.1",
    option2: "Example 2.2",
    option3: "Example 2.3",
    option4: "Example 2.4",
  },
  question3: {
    question: "Question 3",
    option1: "Example 3.1",
    option2: "Example 3.2",
    option3: "Example 3.3",
    option4: "Example 3.4",
  },
  question4: {
    question: "Question 4",
    option1: "Example 4.1",
    option2: "Example 4.2",
    option3: "Example 4.3",
    option4: "Example 4.4",
  },
  question5: {
    question: "Question 5",
    option1: "Example 5.1",
    option2: "Example 5.2",
    option3: "Example 5.3",
    option4: "Example 5.4",
  },
  question6: {
    question: "Question 6",
    option1: "Example 6.1",
    option2: "Example 6.2",
    option3: "Example 6.3",
    option4: "Example 6.4",
  },
};


function randomNum(max) {
    return Math.floor(Math.random() * max);
  }

startBtn.addEventListener("click", function () {
  mainText.style.display = "none";
  startBtn.style.display = "none";
  quizScreen.style.display = "block";

    randomNum(Object.keys(questionPool).length);
   

});
