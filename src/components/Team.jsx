import "./team.css";
import photo from "../assets/photo.jpg";

function Team() {

  const name = "Durairaj";
  const role = "Founder & Automation QA Engineer";

  return (
    <section className="team">
      <div className="team-grid">
        <div className="team-card">
          <img src={photo} alt="Team Member" />
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      </div>
    </section>
  );
}


export default Team;
