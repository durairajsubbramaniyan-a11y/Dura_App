import "./Values.css";

const values = [
  "Trust",
  "Transparency",
  "Collaboration",
  "Agility",
  "Perfection"
];

function Values() {
  return (
    <section className="values">
      {values.map((value) => (
        <div key={value} className="value-card">
          {value}
        </div>
      ))}
    </section>
  );
}

export default Values;
