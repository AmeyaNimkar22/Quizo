import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backImg from "../assets/bg2.png"; // Adjust path if needed

function CreateQuiz({ setQuizData }) {
  const navigate = useNavigate();
  const [numQuestions, setNumQuestions] = useState("");

  const handleContinue = () => {
    if (numQuestions > 0) {
      navigate("/enter-questions", { state: { numQuestions } });
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${backImg})` }}
    >
      <div className="relative bg-blue-200 bg-opacity-90 p-8 rounded-2xl w-full max-w-lg flex flex-col items-center space-y-8 text-center shadow-md">
        {/* Title */}
        <h1
          style={{ fontFamily: "'Bungee Shade', cursive" }}
          className="text-4xl text-blue-950 font-extrabold drop-shadow-md"
        >
          Create Your Quiz
        </h1>

        {/* Input Section */}
        <div className="flex flex-col items-center space-y-4">
          <label className="text-lg font-semibold text-blue-900">
            Enter Number of Questions:
          </label>
          <input
            type="number"
            min="1"
            className="w-44 px-4 py-2 border-2 border-blue-500 rounded-lg text-center text-lg outline-none focus:ring-2 focus:ring-blue-700"
            value={numQuestions}
            onChange={(e) => setNumQuestions(e.target.value)}
          />

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            className="w-44 px-6 py-3 text-black text-lg font-bold uppercase rounded-lg transition duration-300 bg-green-500 hover:bg-green-600"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateQuiz;
