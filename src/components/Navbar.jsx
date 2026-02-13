import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">DURA Tech Prep</div>

      <nav className="menu">
  <Link to="/">Home</Link>
  <Link to="/courses">Courses</Link>
  <Link to="/roadmap">Roadmap</Link>
  <Link to="/projects">Projects</Link>
  <Link to="/contact">Contact</Link>
      </nav>


      <Link to="/contact" className="cta-btn">
         Get in Touch
      </Link>
   

    </header>
  );
}

export default Navbar;
