import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import backImg from "../assets/bg2.png"; // Adjust path if needed

function Results() {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, total, quizData } = location.state || { score: 0, total: 0, quizData: [] };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${backImg})` }}
    >
      <div className="relative bg-blue-200 bg-opacity-90 p-8 rounded-2xl w-full max-w-lg flex flex-col items-center space-y-6 text-center shadow-md">
        {/* Title */}
        <h1
          style={{ fontFamily: "'Bungee Shade', cursive" }}
          className="text-4xl text-blue-950 font-extrabold drop-shadow-md"
        >
          Quiz Results
        </h1>

        {/* Score Display */}
        <div className="w-full p-6 bg-white rounded-lg shadow-md text-blue-900">
          <h2 className="text-xl font-semibold">Your Score:</h2>
          <p className="text-5xl font-extrabold text-green-600">{score} / {total}</p>

          {/* Performance Message */}
          <p className="mt-3 text-lg font-medium">
            {score === total
              ? "🎉 Amazing! You got a perfect score!"
              : score >= total / 2
              ? "👏 Good job! Keep practicing!"
              : "😔 Don't worry, try again!"}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center space-y-4">
        <button
  onClick={() => navigate("/play-quiz", { state: { quizData, reset: true } })}
  className="w-44 px-6 py-3 text-black text-lg font-bold uppercase rounded-lg transition duration-300 bg-green-500 hover:bg-green-600"
>
  Play Again
</button>



          <button
            onClick={() => navigate("/")}
            className="w-44 px-6 py-3 text-black text-lg font-bold uppercase rounded-lg transition duration-300 bg-yellow-400 hover:bg-yellow-500"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Results;
