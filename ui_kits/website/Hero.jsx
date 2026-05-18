/* global React */
function Hero({ onApply }) {
  return (
    <section className="scs-hero">
      <div className="scs-container scs-hero-grid">
        <div className="scs-hero-copy">
          <span className="pill pill-teal">A First Stop Recovery program · Philadelphia</span>
          <h1 className="display scs-hero-h">
            Pizza pays the bills.<br/>
            <span className="scs-hero-h2">The program pays it forward.</span>
          </h1>
          <p className="lead scs-hero-lead">
            Second Chance Slice is a 16-week paid training program for Philadelphians coming home.
            Learn the kitchen. Learn the trades. Leave with a paycheck, two certifications, and a job.
          </p>
          <div className="scs-hero-ctas">
            <button className="btn btn-primary" onClick={onApply}>Apply now</button>
            <a className="btn btn-ghost" href="#program">Read the program guide →</a>
          </div>
          <div className="scs-hero-meta mono">
            16 weeks &middot; 4 days/wk &middot; $15/hr &middot; ServSafe + OSHA-10
          </div>
        </div>
        <div className="scs-hero-photo">
          <div className="scs-photo scs-photo-hero">
            <span className="scs-photo-label">photo · cook pulling a pizza from the oven, golden hour</span>
          </div>
          <div className="scs-photo-tag">
            <span className="scs-photo-tag-num">47</span>
            <span className="scs-photo-tag-lbl">grads placed in 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
