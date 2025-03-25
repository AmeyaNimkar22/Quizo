import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import backImg from "../assets/spaceship.png";
import "@fontsource/press-start-2p";

function GameStory() {
  const navigate = useNavigate();
  const location = useLocation();
  const quizSettings = location.state || {}; // Get quiz settings

  const storyText =
    "Your spaceship has crashed on an unknown planet named Quizo...\nTo get back to Earth, you must answer more than half of the questions right.";

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (index < storyText.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + storyText[index]);
        setIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setShowButton(true);
    }
  }, [index, storyText]);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${backImg})` }}
    >
      <div className="relative bg-black bg-opacity-50 border-4 border-yellow-400 p-8 rounded-2xl max-w-lg text-white text-lg text-center shadow-lg">
        <p className="whitespace-pre-line font-['Press_Start_2P'] text-sm">{displayText}</p>

        {showButton && (
          <button
          onClick={() => navigate("/quizgame", { state: quizSettings })}
            className="mt-6 px-6 py-3 text-black text-sm font-bold uppercase rounded-lg transition duration-300 bg-yellow-400 hover:bg-yellow-500 font-['Press_Start_2P']"
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
}

export default GameStory;
