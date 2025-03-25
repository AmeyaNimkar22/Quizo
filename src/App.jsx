import React, { useState } from "react";
import Home from "./Home";
import QuizSetting from "./QuizSetting";
import Instruction from "./Instruction";

function App() {
  const [screen, setScreen] = useState("home");

  return (
    <div>
      {screen === "home" && <Home onPlay={() => setScreen("quiz")} onInstructions={() => setScreen("instructions")} />}
      {screen === "quiz" && <QuizSetting onBack={() => setScreen("home")} />}
      {screen === "instructions" && <Instruction onBack={() => setScreen("home")} />}
    </div>
  );
}

export default App;
