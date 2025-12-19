import Home from "./pages/Home";
import Snowfall from "react-snowfall";

function App() {
  return (
    <>
      {/* Snowfall background */}
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
        <Home />
      </div>
    </>
  );
}

export default App;
