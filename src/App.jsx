import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import QuizSetting from "./QuizSetting";
import Instruction from "./Instruction";
import GameStory from "./pages/GameStory.jsx"; // Moved out of pages for consistency
import QuizGame from "./pages/QuizGame.jsx";
import Result from "./pages/Result.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<GameStory />} />
        <Route path="/quiz" element={<QuizSetting />} />
        <Route path="/instructions" element={<Instruction />} />
        <Route path="/quizgame" element={<QuizGame />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
