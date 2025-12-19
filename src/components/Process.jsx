import "./Process.css";

const steps = ["Learn", "Practice", "Build Logic", "Prepare"];

function Process() {
  return (
    <section className="process">
      <h2 className="process-text">
        Leverage strategic prioritization and real-world expertise to craft
        exceptional digital solutions.
      </h2>

      <div className="process-steps">
        {steps.map((step) => (
          <div key={step} className="step">
            {step}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;
