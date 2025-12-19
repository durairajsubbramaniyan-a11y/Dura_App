import "./team.css";

function Team() {
  return (
    <section className="team">
        <p className="team-subtitle">
  Helping developers and testers prepare smarter for interviews
</p>
      <h2>Meet the Creator<span></span></h2>

      <div className="team-grid">
        <div className="team-card">
          <img src="public/photo.jpg" alt="Team Member" />
          <h3>Durairaj</h3>
          <p>Developer</p>
        </div>
      </div>
    </section>
  );
}

export default Team;
