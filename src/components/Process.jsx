import { useState } from "react";
import "./Process.css";

const steps = ["Learn", "Practice", "Build Logic", "Prepare"];

const contentData = {
  Learn: "Start by understanding core concepts deeply. Focus on fundamentals and theory.",
  Practice: "Solve real-world problems and small projects daily to improve your skills.",
  "Build Logic": "Strengthen your logical thinking by solving coding challenges.",
  Prepare: "Revise concepts, mock interviews, and prepare confidently for opportunities."
};

function Process() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section className="process">
      <h2 className="process-text">
        Leverage strategic prioritization and real-world expertise to craft
        exceptional digital solutions.
      </h2>

      <div className="process-steps">
        {steps.map((step) => (
          <div
            key={step}
            className={`step ${activeStep === step ? "active" : ""}`}
            onClick={() => setActiveStep(step)}
          >
            {step}
          </div>
        ))}
      </div>

      {activeStep && (
        <div className="step-content">
          <p>{contentData[activeStep]}</p>
        </div>
      )}
    </section>
  );
}

export default Process;
