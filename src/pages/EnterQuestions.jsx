import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import backImg from "../assets/bg2.png"; // Adjust path if needed

function EnterQuestions() {
  const navigate = useNavigate();
  const location = useLocation();
  const numQuestions = location.state?.numQuestions || 1; // Get number of questions from state

  const [questions, setQuestions] = useState(
    Array.from({ length: numQuestions }, () => ({
      questionText: "",
      options: ["", "", "", ""],
      correctAnswer: null,
    }))
  );

  const handleChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    if (field === "questionText") {
      updatedQuestions[index].questionText = value;
    } else {
      updatedQuestions[index].options[field] = value;
    }
    setQuestions(updatedQuestions);
  };

  const handleCorrectAnswerSelect = (qIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].correctAnswer = optionIndex;
    setQuestions(updatedQuestions);
  };

  const handleSubmitQuiz = () => {
    navigate("/play-quiz", { state: { quizData: questions } });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${backImg})` }}
    >
      <div className="relative bg-blue-200 bg-opacity-90 p-8 rounded-2xl w-full max-w-2xl flex flex-col items-center space-y-6 text-center shadow-md">
        {/* Title */}
        <h1
          style={{ fontFamily: "'Bungee Shade', cursive" }}
          className="text-4xl text-blue-950 font-extrabold drop-shadow-md"
        >
          Enter Questions
        </h1>

        <div className="w-full max-w-lg space-y-6">
          {questions.map((q, qIndex) => (
            <div key={qIndex} className="bg-white p-4 rounded-lg shadow-md">
              {/* Question Input */}
              <label className="block text-lg font-semibold text-blue-900">
                Question {qIndex + 1}:
              </label>
              <input
                type="text"
                placeholder="Enter question"
                className="w-full px-4 py-2 mt-2 border-2 border-blue-500 rounded-lg outline-none focus:ring-2 focus:ring-blue-700"
                value={q.questionText}
                onChange={(e) =>
                  handleChange(qIndex, "questionText", e.target.value)
                }
              />

              {/* Options */}
              <div className="mt-4 space-y-2">
                {q.options.map((opt, optIndex) => (
                  <div key={optIndex} className="flex items-center space-x-2">
                    <input
                      type="text"
                      placeholder={`Option ${optIndex + 1}`}
                      className="w-full px-3 py-2 border-2 border-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-gray-600"
                      value={opt}
                      onChange={(e) =>
                        handleChange(qIndex, optIndex, e.target.value)
                      }
                    />
                    <input
                      type="radio"
                      name={`correct-${qIndex}`}
                      className="w-5 h-5"
                      checked={q.correctAnswer === optIndex}
                      onChange={() => handleCorrectAnswerSelect(qIndex, optIndex)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Submit Quiz Button */}
        <button
          onClick={handleSubmitQuiz}
          className="w-44 px-6 py-3 text-black text-lg font-bold uppercase rounded-lg transition duration-300 bg-green-500 hover:bg-green-600"
        >
          Submit Quiz
        </button>
      </div>
    </div>
  );
}

export default EnterQuestions;
