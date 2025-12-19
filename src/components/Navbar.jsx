import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">DURA Tech Prep</div>

      <nav className="menu">
        <a href="#">Home</a>
        <a href="#">Java</a>
        <a href="#">JavaScript </a>
        <a href="#">Python </a>
        <a href="#">Contact</a>
      </nav>

      <button className="cta-btn">Get in Touch</button>
    </header>
  );
}

export default Navbar;
