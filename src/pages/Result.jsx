import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import successImg from "../assets/success.png";  // Image for 50% or more
import failureImg from "../assets/failure.png";  // Image for less than 50%

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, totalQuestions } = location.state || { score: 0, totalQuestions: 1 };
  
  const percentage = (score / (totalQuestions * 10)) * 100; // Assuming each correct answer gives 10 points
  const isSuccess = percentage >= 50;

  const message = isSuccess
    ? "Congratulations! You've escaped from Quizo!"
    : "Oh no! You failed to escape from Quizo. Try again!";

  const backgroundImage = isSuccess ? successImg : failureImg;

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relative bg-black bg-opacity-50 border-4 border-yellow-400 p-8 rounded-2xl max-w-lg text-white text-lg text-center shadow-lg">
        <h2 className="text-2xl font-bold">{message}</h2>
        <p className="text-lg mt-4">Your Score: {score}</p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-3 text-black text-sm font-bold uppercase rounded-lg transition duration-300 bg-yellow-400 hover:bg-yellow-500"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default Result;
