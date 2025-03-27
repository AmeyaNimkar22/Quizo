import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import backImg from "../assets/bg2.png"; // Adjust path if needed

function PlayQuiz() {
  const navigate = useNavigate();
  const location = useLocation();
  const quizData = location.state?.quizData || [];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);

  // Reset state when component mounts (for quiz restart)
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setScore(0); // Ensure score resets when playing again
  }, [quizData]);
  

  const handleAnswerSelect = (optionIndex) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: optionIndex,
    }));
  };

  const handleNext = () => {
    const isCorrect = selectedAnswers[currentQuestionIndex] === quizData[currentQuestionIndex]?.correctAnswer;
    
    // Calculate new score before updating state
    const newScore = isCorrect ? score + 1 : score;
  
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setScore(newScore); // Update score for next question
    } else {
      // Navigate immediately with updated score
      navigate("/results", { state: { score: newScore, total: quizData.length, quizData } });
    }
  };
  

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
          Play Quiz
        </h1>

        {/* Question Display */}
        <div className="w-full p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-blue-900">
            {quizData[currentQuestionIndex]?.questionText}
          </h2>

          {/* Options */}
          <div className="mt-4 space-y-2">
            {quizData[currentQuestionIndex]?.options.map((option, index) => (
              <button
                key={index}
                className={`w-full px-4 py-2 border-2 rounded-lg text-lg font-medium transition duration-300 ${
                  selectedAnswers[currentQuestionIndex] === index
                    ? "bg-green-500 text-white border-green-700"
                    : "bg-gray-200 border-gray-400 hover:bg-gray-300"
                }`}
                onClick={() => handleAnswerSelect(index)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="w-44 px-6 py-3 text-black text-lg font-bold uppercase rounded-lg transition duration-300 bg-green-500 hover:bg-green-600"
        >
          {currentQuestionIndex === quizData.length - 1 ? "Finish Quiz" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default PlayQuiz;
