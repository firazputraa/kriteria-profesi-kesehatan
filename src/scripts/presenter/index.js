import { quizData } from "../model/index.js";

export class quizPresenter {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindStartQuiz(this.handleStartQuiz);
    this.view.bindRestartQuiz(this.handleRestartQuiz);

    this.view.showScreen("start");
  }

  handleStartQuiz = () => {
    this.model.reset();
    this.view.showScreen("quiz");
    this.nextQuestion();
  };

  handleRestartQuiz = () => {
    this.view.showScreen("start");
  };

  handleSelectAnswer = (points) => {
    this.model.addScores(points);
    this.model.currentQuestionIndex++;
    this.nextQuestion();
  };

  nextQuestion() {
    const index = this.model.currentQuestionIndex;
    if (index < quizData.length) {
      this.view.displayQuestion(
        quizData[index],
        index + 1,
        quizData.length,
        this.handleSelectAnswer
      );
    } else {
      this.showFinalResult();
    }
  }

  showFinalResult() {
    const result = this.model.getFinalResult();
    this.view.displayResult(result);
    this.view.showScreen("result");
  }
}
