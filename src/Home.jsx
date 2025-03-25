import React from "react";
import backImg from "./assets/bg2.png";

function Home({ onPlay, onInstructions }) {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${backImg})` }}
    >
      <div className="relative bg-blue-200 bg-opacity-90 p-8 rounded-2xl w-full max-w-lg flex flex-col items-center space-y-8 text-center shadow-md">
        {/* Quizo Title */}
        <h1
          style={{ fontFamily: "'Bungee Shade', cursive" }}
          className="text-6xl text-blue-950 font-extrabold drop-shadow-md"
        >
          Quizo
        </h1>

        {/* Buttons Section */}
        <div className="flex flex-col items-center space-y-5">
          <button
            onClick={onPlay} // Calls function to switch screens
            className="w-44 px-6 py-3 text-black text-lg font-bold uppercase rounded-lg transition duration-300 bg-green-500 hover:bg-green-600"
          >
            Play
          </button>
          <button className="w-44 px-6 py-3 text-black text-lg font-bold uppercase rounded-lg transition duration-300 bg-yellow-400 hover:bg-yellow-500">
            Create Quiz
          </button>
          <button
            onClick={onInstructions} // Calls function to show instructions
            className="w-44 px-6 py-3 text-black text-lg font-bold uppercase rounded-lg transition duration-300 bg-red-500 hover:bg-red-600"
          >
            Instructions
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
