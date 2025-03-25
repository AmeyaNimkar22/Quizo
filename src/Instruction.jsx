import React from "react";
import backImg from "./assets/bg2.png";

function Instruction({ onBack }) {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${backImg})` }}
    >
      <div className="relative bg-blue-200 bg-opacity-90 p-8 rounded-2xl w-full max-w-lg flex flex-col items-center space-y-6 text-center shadow-md">
        {/* Title */}
        <h1 className="text-4xl text-blue-950 font-extrabold drop-shadow-md">
          Instructions 
        </h1>

        {/* Play Instructions */}
        <div className="text-left text-gray-800 space-y-2">
          <h2 className="text-2xl font-semibold text-green-700">🎮 Play Mode</h2>
          <p>1.Select all your quiz settings and start the game.</p>
          <p>2.Answer questions correctly to earn <span className="font-bold text-green-600">10 marks</span> per question.</p>
          <p>3.A wrong answer gets you <span className="font-bold text-red-600">0 marks</span>.</p>
          <p>4.You must score more than <span className="font-bold text-purple-600">50%</span>, or else...</p>
          <p className="text-red-600 font-semibold">
            The aliens won’t help you repair your spaceship, and you’ll be 
            stuck in space forever! 
          </p>
        </div>

        {/* Create Quiz Instructions */}
        <div className="text-left text-gray-800 space-y-2">
          <h2 className="text-2xl font-semibold text-yellow-600">✍️ Create Quiz</h2>
          <p>In this mode, you can create your own quiz and challenge your friends.</p>
          <p>Set your own questions, define answer choices, and make it fun!</p>
        </div>

        {/* Back Button */}
        <button
          onClick={onBack}
          className="w-44 px-6 py-3 text-black text-lg font-bold uppercase rounded-lg transition duration-300 bg-gray-400 hover:bg-gray-500"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Instruction;
