import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import backImg from "../assets/spaceship.png";


function QuizGame() {
  const navigate = useNavigate();
  const location = useLocation();
  const { numQuestions, category, difficulty, type } = location.state || {};

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch questions when the component mounts
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const url = `https://opentdb.com/api.php?amount=${numQuestions}&category=${category || ""}&difficulty=${difficulty || ""}&type=${type || ""}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        
        if (data.response_code === 4) {
          throw new Error("Too many requests. Please wait and try again.");
        }
  
        setQuestions(data.results || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setLoading(false);
      }
    };
  
    fetchQuestions();
  }, [numQuestions, category, difficulty, type]);
  
  // Handle answer selection
  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  // Handle submission of answer
  const handleSubmit = () => {
    if (selectedAnswer) {
      let newScore = score;
      if (selectedAnswer === questions[currentQuestionIndex].correct_answer) {
        newScore += 10;
        setScore(newScore); // Ensure score is updated
      }
  
      if (currentQuestionIndex + 1 < questions.length) {
        setSelectedAnswer(null);
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        // Delay navigation slightly to allow state updates
        setTimeout(() => {
          navigate("/result", { state: { score: newScore, totalQuestions: questions.length } });
        }, 100);
      }
    }
  };
  

  // Handle quiz completion
  const handleFinish = () => {
    alert(`Quiz Over! Your final score is: ${score}`);
    navigate("/"); // Redirect to home or another page
  };

  const handleEndGame = () => {
    navigate("/result", { state: { score, totalQuestions: questions.length } });
  };

  if (loading) {
    return <p className="text-center text-white">Loading questions...</p>;
  }
  
  if (!questions || questions.length === 0) {
    return (
      <div className="text-center text-white">
        <h1>Oops! No questions found.</h1>
        <p>Please try again later.</p>
      </div>
    );
  }
  

  if (currentQuestionIndex >= questions.length) {
    return (
      <div className="text-center text-white">
        <h1>Quiz Over!</h1>
        <p>Your final score: {score}</p>
        <button onClick={handleEndGame} className="mt-4 px-6 py-3 bg-yellow-400 rounded">
          Finish
        </button>
      </div>
    );
  }
  

  const currentQuestion = questions[currentQuestionIndex];
  const allAnswers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer].sort(() => Math.random() - 0.5);

  return (
    <div
          className="flex items-center justify-center min-h-screen bg-cover bg-center px-4"
          style={{ backgroundImage: `url(${backImg})` }}
        >
      <div className="bg-gray-500 p-6 rounded-lg shadow-lg text-center w-full max-w-xl ">
        <h2 className="text-2xl font-bold text-white">Question {currentQuestionIndex + 1} / {questions.length}</h2>
        <p className="text-lg mt-4 text-white" dangerouslySetInnerHTML={{ __html: currentQuestion.question }}></p>


        <div className="mt-4 space-y-2">
          {allAnswers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(answer)}
              className={`block w-full px-4 py-2 rounded text-white ${selectedAnswer === answer ? "bg-blue-600" : "bg-gray-700"} hover:bg-blue-700 transition`}
            >
              {answer}
            </button>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default QuizGame;
