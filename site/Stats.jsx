/* global React */
function Stats() {
  const items = [
    { n: "47",     l: "graduates placed in 2024" },
    { n: "$19/hr", l: "average starting wage" },
    { n: "16",     l: "weeks of paid training" },
    { n: "84%",    l: "still employed at 12 months" },
  ];
  return (
    <section className="scs-stats">
      <div className="scs-container scs-stats-grid">
        {items.map((it,i) => (
          <div key={i} className="scs-stat">
            <div className="scs-stat-n">{it.n}</div>
            <div className="scs-stat-l">{it.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.Stats = Stats;
