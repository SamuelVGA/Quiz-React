import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Welcome.css";


import Valo from "../img/valo.png";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Pronto para a batalha?</h2>
      <p>clique no botão para começar</p>
      
      <div>
        <button class="btn" onClick={() => dispatch({ type: "CHANGE_STAGE" })}>
          <span class="btn__inner">
            <span class="btn__slide"></span>
            <span class="btn__content">Vamos nessa</span>
          </span>
        </button>
      </div>
      <img src={Valo} alt="Início do Quiz" />
    </div>
  );
};

export default Welcome;
