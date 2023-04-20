var mainText = document.querySelector("#mainText");
var startBtn = document.querySelector("#startBtn");
var quizScreen = document.querySelector("#quiz")

var questionPool = [""]

startBtn.addEventListener("click", function() {
    mainText.style.display = "none"
    startBtn.style.display = "none"
    quizScreen.style.display = "block"


})