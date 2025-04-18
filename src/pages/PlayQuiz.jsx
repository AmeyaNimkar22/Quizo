import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import backImg from "../assets/bg2.png";

function PlayQuiz() {
  const navigate = useNavigate();
  const location = useLocation();
  const quizData = location.state?.quizData || [];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setScore(0);
  }, [quizData]);

  const handleAnswerSelect = (optionIndex) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: optionIndex,
    }));
  };

  const handleNext = () => {
    const isCorrect =
      selectedAnswers[currentQuestionIndex] ===
      quizData[currentQuestionIndex]?.correctAnswer;

    const newScore = isCorrect ? score + 1 : score;

    setModalContent({
      question: quizData[currentQuestionIndex]?.questionText,
      correctAnswer:
        quizData[currentQuestionIndex]?.options[
          quizData[currentQuestionIndex]?.correctAnswer
        ],
      userAnswer:
        quizData[currentQuestionIndex]?.options[
          selectedAnswers[currentQuestionIndex]
        ],
    });

    setIsModalOpen(true);

    if (currentQuestionIndex < quizData.length - 1) {
      setScore(newScore);
    } else {
      setScore(newScore);
      setTimeout(() => {
        navigate("/results", {
          state: { score: newScore, total: quizData.length, quizData },
        });
      }, 2000);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
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
          {currentQuestionIndex === quizData.length - 1
            ? "Finish Quiz"
            : "Next"}
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-2xl w-96 shadow-xl transition-transform duration-300 ease-in-out text-blue-950">
            <h3
              className="text-3xl font-semibold"
              style={{ fontFamily: "'Bungee Shade', cursive" }}
            >
              Question Review
            </h3>
            <div className="mt-6 space-y-4 text-left">
              <p className="text-lg">
                <strong className="text-blue-600">Question:</strong>{" "}
                {modalContent.question}
              </p>
              <p className="text-lg">
                <strong className="text-blue-600">Your Answer:</strong>{" "}
                {modalContent.userAnswer}
              </p>
              <p className="text-lg">
                <strong className="text-blue-600">Correct Answer:</strong>{" "}
                {modalContent.correctAnswer}
              </p>
            </div>
            {/* Close modal on button click or auto-advance */}
            {currentQuestionIndex < quizData.length - 1 && (
              <button
                onClick={closeModal}
                className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg w-full hover:bg-blue-700 transition duration-200 ease-in-out"
              >
                Close
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default PlayQuiz;
