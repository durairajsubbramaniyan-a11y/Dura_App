import "./Values.css";
import { useNavigate } from "react-router-dom";
import { FaHtml5, FaCss3Alt, FaReact, FaAngular } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const values = ["JavaScript", "HTML", "CSS", "React", "Angular"];

const iconMap = {
  JavaScript: <SiJavascript />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  React: <FaReact />,
  Angular: <FaAngular />
};

function Values() {
  const navigate = useNavigate();

  return (
    <section className="values">
      {values.map((value) => (
        <div
          key={value}
          className="value-card"
          title={value}
          onClick={() => navigate(`/questions/${value.toLowerCase()}`)}
          style={{ cursor: "pointer" }}
        >
          {iconMap[value]}
        </div>
      ))}
    </section>
  );
}

export default Values;
