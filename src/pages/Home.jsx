import Navbar from "../components/Navbar";
import Process from "../components/Process";
import Offerings from "../components/Offerings";
import Values from "../components/Values";
import Team from "../components/Team";
import "./home.css";

function Home() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="overlay">
          <h1>
           Master Programming & Crack Interviews with Confidence<span>.</span>
          </h1>

          <p>
            We craft innovative, customer-focused solutions for startups
            and enterprises worldwide.
          </p>

          <button className="hero-btn">Connect with Us</button>
        </div>
      </section>

      {/* SCROLL SECTIONS */}
      <Process />
      <Offerings />
      <Values />
      <Team />
    </>
  );
}

export default Home;
