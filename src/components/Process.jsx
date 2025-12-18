import "./Process.css";

const steps = ["Plan", "Design", "Build", "Test", "Deliver"];

function Process() {
  return (
    <section className="process">
      <p className="process-text">
        Leverage strategic prioritization and real-world expertise to craft
        exceptional digital solutions.
      </p>

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
