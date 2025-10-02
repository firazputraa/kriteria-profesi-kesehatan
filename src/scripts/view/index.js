export class quizView {
  constructor() {
    this.startContent = document.getElementById("startContent");
    this.quizContent = document.getElementById("quizContent");
    this.resultContent = document.getElementById("resultContent");

    this.startButton = document.getElementById("startButton");
    this.restartButton = document.getElementById("restartButton");

    this.questionText = document.getElementById("questionText");
    this.answerButtonsContainer = document.getElementById("answerButtons");

    this.questionCounter = document.getElementById("questionCounter");
    this.totalQuestion = document.getElementById("totalQuestion");
    this.resultProfession = document.getElementById("resultProfession");
    this.resultDescription = document.getElementById("resultDescription");
  }

  bindStartQuiz(handler) {
    this.startButton.addEventListener("click", handler);
  }

  bindRestartQuiz(handler) {
    this.restartButton.addEventListener("click", handler);
  }

  displayQuestion(questionData, questionNumber, totalQuestion, answerHandler) {
    this.questionText.innerText = questionData.question;
    this.questionCounter.innerText = questionNumber;
    this.totalQuestion.innerText = totalQuestion;

    this.answerButtonsContainer.innerHTML = "";

    questionData.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("button-answer");
      button.addEventListener("click", () => answerHandler(answer.points));
      this.answerButtonsContainer.appendChild(button);
    });
  }

  displayResult(result) {
    this.resultProfession.innerText = result.title;
    this.resultDescription.innerText = result.description;
  }

  showScreen(screenName) {
    this.startContent.classList.remove("active");
    this.quizContent.classList.remove("active");
    this.resultContent.classList.remove("active");

    if (screenName === "quiz") {
      this.quizContent.classList.add("active");
    } else if (screenName === "result") {
      this.resultContent.classList.add("active");
    } else {
      this.startContent.classList.add("active");
    }
  }
}
