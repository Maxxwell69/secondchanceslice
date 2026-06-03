/* global React */
function HowItWorks() {
  const steps = [
    { n: "01", t: "Show up Tuesday",       d: "10am at 4501 Frankford Ave. No interview. No GED needed. Bring an ID if you have one." },
    { n: "02", t: "Enter the kitchen",     d: "You'll train in a real pizza kitchen — dough, line, prep, fire." },
    { n: "03", t: "Train and earn",        d: "Paid from day one. Four days a week." },
    { n: "04", t: "Walk into a job",       d: "Graduate ServSafe certified with references and a direct intro to a partner restaurant." },
  ];
  return (
    <section className="scs-how" id="how">
      <div className="scs-container">
        <div className="scs-section-head">
          <span className="eyebrow">How it works</span>
          <h2 className="h2">Four steps. No mystery.</h2>
        </div>
        <ol className="scs-steps">
          {steps.map(s => (
            <li key={s.n} className="scs-step">
              <div className="scs-step-n">{s.n}</div>
              <div className="scs-step-t">{s.t}</div>
              <div className="scs-step-d">{s.d}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

window.HowItWorks = HowItWorks;
