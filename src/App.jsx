import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import GenerateQuiz from "./pages/GenerateQuiz";
import GenerateQuestion from "./pages/GenerateQuestion";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/generateQuiz" element={<GenerateQuiz />} />
      <Route path="/generateQuestion" element={<GenerateQuestion />} />

      </Routes>
  
     
    </>
  );
}

export default App;
