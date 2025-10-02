import { state } from "./model/index.js";
import { quizView } from "./view/index.js";
import { quizPresenter } from "./presenter/index.js";
import "../styles/style.css";

document.addEventListener("DOMContentLoaded", () => {
  new quizPresenter(state, new quizView());
});
