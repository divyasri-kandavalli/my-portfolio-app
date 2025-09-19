import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import AnimatedBackground from "./components/AnimatedBackground";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <>
    <AnimatedBackground>
      <CustomCursor/>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      </AnimatedBackground>
    </>
  );
}

export default App;
