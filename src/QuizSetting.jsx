import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backImg from "./assets/bg2.png";

function QuizSetting({ onBack }) {
  const [numQuestions, setNumQuestions] = useState(10);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();
  

const startGame = () => {
  navigate("/game", {
    state: {
      numQuestions,
      category,
      difficulty,
      type,
    },
  });
};

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${backImg})` }}
    >
      <div className="relative bg-blue-200 bg-opacity-90 p-8 rounded-2xl w-full max-w-lg flex flex-col items-center space-y-8 text-center shadow-md">
        <h1
          style={{ fontFamily: "'Bungee Shade', cursive" }}
          className="text-6xl text-blue-950 font-extrabold drop-shadow-md"
        >
          Quizo
        </h1>

        <div className="w-full flex flex-col items-center space-y-4">
          <label className="text-lg font-semibold">
            Number of Questions:
            <input
              type="number"
              min="1"
              max="50"
              value={numQuestions}
              onChange={(e) => setNumQuestions(e.target.value)}
              className="ml-2 px-2 py-1 border rounded"
            />
          </label>

          <label className="text-lg font-semibold w-full flex flex-col items-center">
            Category:
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full max-w-xs px-3 py-2 border rounded-md"
            >
              <option value="">Any</option>
              <option value="9">General Knowledge</option>
              <option value="10">Entertainment: Books</option>
              <option value="11">Entertainment: Film</option>
              <option value="12">Entertainment: Music</option>
              <option value="13">Entertainment: Musicals & Theatres</option>
              <option value="14">Entertainment: Television</option>
              <option value="15">Entertainment: Video Games</option>
              <option value="16">Entertainment: Board Games</option>
              <option value="17">Science & Nature</option>
              <option value="18">Science: Computers</option>
              <option value="19">Science: Mathematics</option>
              <option value="20">Mythology</option>
              <option value="21">Sports</option>
              <option value="22">Geography</option>
              <option value="23">History</option>
              <option value="24">Politics</option>
              <option value="25">Art</option>
              <option value="26">Celebrities</option>
              <option value="27">Animals</option>
              <option value="28">Vehicles</option>
              <option value="29">Entertainment: Comics</option>
              <option value="30">Science: Gadgets</option>
              <option value="31">Entertainment: Japanese Anime & Manga</option>
              <option value="32">Entertainment: Cartoon & Animations</option>
            </select>
          </label>

          <label className="text-lg font-semibold">
            Difficulty:
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="ml-2 px-2 py-1 border rounded"
            >
              <option value="">Any</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>

          <label className="text-lg font-semibold">
            Type:
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="ml-2 px-2 py-1 border rounded"
            >
              <option value="">Any</option>
              <option value="multiple">Multiple Choice</option>
              <option value="boolean">True/False</option>
            </select>
          </label>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full justify-center">
          <button
  onClick={startGame}
  className="w-full md:w-44 px-6 py-3 text-black text-lg font-bold uppercase rounded-lg transition duration-300 bg-green-500 hover:bg-green-600"
>
  Play
</button>;
            <button
              onClick={onBack}
              className="w-full md:w-44 px-6 py-3 text-black text-lg font-bold uppercase rounded-lg transition duration-300 bg-gray-400 hover:bg-gray-500"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizSetting;
