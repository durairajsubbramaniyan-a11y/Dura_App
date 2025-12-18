import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">DURA</div>

      <nav className="menu">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact Us</a>
        <a href="#">Services</a>
        <a href="#">Insights</a>
      </nav>

      <button className="cta-btn">Get in Touch</button>
    </header>
  );
}

export default Navbar;
