import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import QuizSetting from "./QuizSetting";
import Instruction from "./Instruction";
import GameStory from "./pages/GameStory.jsx";
import QuizGame from "./pages/QuizGame.jsx";
import Result from "./pages/Result.jsx";
import CreateQuiz from "./pages/CreateQuiz.jsx";
import EnterQuestions from "./pages/EnterQuestions.jsx";
import PlayQuiz from "./pages/PlayQuiz.jsx";
import Results from "./pages/Results.jsx";

function App() {
  const [quizData, setQuizData] = useState([]); // ✅ Define state for quiz data

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<GameStory />} />
        <Route path="/quiz" element={<QuizSetting />} />
        <Route path="/instructions" element={<Instruction />} />
        <Route path="/quizgame" element={<QuizGame />} />
        <Route path="/result" element={<Result />} />
        <Route path="/create-quiz" element={<CreateQuiz setQuizData={setQuizData} />} /> 
        <Route path="/enter-questions" element={<EnterQuestions setQuizData={setQuizData} />} />
        <Route path="/play-quiz" element={<PlayQuiz quizData={quizData} />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
