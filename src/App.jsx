import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import QuizSetting from "./QuizSetting";
import Instruction from "./Instruction";
import GameStory from "./pages/GameStory.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizSetting />} />
        <Route path="/instructions" element={<Instruction />} />
        <Route path="/game" element={<GameStory />} />
      </Routes>
    </Router>
  );
}

export default App;
