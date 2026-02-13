import { Routes, Route } from "react-router-dom";
import Snowfall from "react-snowfall";
import Courses from "./pages/Courses";
import Roadmap from "./pages/Roadmap";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Questions from "./pages/Questions";

function App() {
  return (
    <>
      {/* Snow background */}
      <div
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          top: 0,
          left: 0,
          zIndex: 9999,
          pointerEvents: "none",
        }}
      >
        <Snowfall color="#82cfd9ff" snowflakeCount={120} />
      </div>

      {/* App content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/courses" element={<Courses />} />
  <Route path="/roadmap" element={<Roadmap />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/questions/:tech" element={<Questions />} />
</Routes>

      </div>
    </>
  );
}

export default App;
