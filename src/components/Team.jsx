import "./team.css";

function Team() {
  return (
    <section className="team">
      <h2>Meet the Crew<span>.</span></h2>

      <div className="team-grid">
        <div className="team-card">
          <img src="public/photo.jpg" alt="Team Member" />
          <h3>Your Name</h3>
          <p>QA Engineer</p>
        </div>

        <div className="team-card">
          <img src="/team2.jpg" alt="Team Member" />
          <h3>Team Member</h3>
          <p>Developer</p>
        </div>

        <div className="team-card">
          <img src="/team3.jpg" alt="Team Member" />
          <h3>Team Member</h3>
          <p>Designer</p>
        </div>
      </div>
    </section>
  );
}

export default Team;
