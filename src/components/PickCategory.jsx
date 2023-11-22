import { useContext, useState } from "react";

import { QuizContext } from "../context/quiz";

import Cat from "../img/cat.svg";

import "./PickCategory.css";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [isLoading, setIsLoading] = useState(false); 
  async function chooseCategoryAndReorderQuestions(category) {
    setIsLoading(true);
    try {
      const apiUrl = `https://api-json-serve.vercel.app/${category}`;
      const response = await fetch(apiUrl);
      const data = await response.json();

      dispatch({ type: "START_GAME", data: data });
      dispatch({ type: "REORDER_QUESTIONS" });
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div id="category">
      <h2>Escolha uma categoria</h2>
      <p>As perguntas serão referentes a uma das opções abaixo:</p>
      {isLoading && (
        <div className="spinner-container">
          <div className="spinner" />
          <p className="loading-text">Carregando...</p>
        </div>
      )}
      {quizState.questions.map((question) => (
        <button className="button"
          onClick={() => chooseCategoryAndReorderQuestions(question.category)}
          key={question.category}
        >
          {question.category}
        </button>
      ))}

      <img src={Cat} alt="Categoria do Quiz" />
    </div>
  );
};

export default PickCategory;
