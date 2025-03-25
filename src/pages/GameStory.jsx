import React from "react";
import backImg from "../assets/bg2.png"; // Corrected relative path

function GameStory() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${backImg})` }}
    >
      {/* Content can be added here */}
    </div>
  );
}

export default GameStory;
