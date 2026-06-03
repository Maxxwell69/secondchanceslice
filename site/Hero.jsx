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
            Second Chance Slice is a paid training program for Philadelphians coming home.
            Learn the kitchen. Leave with a paycheck, a certification, and a job.
          </p>
          <div className="scs-hero-ctas">
            <a className="btn btn-ghost" href="#program">Read the program guide →</a>
          </div>
        </div>
        <div className="scs-hero-photo">
          <div className="scs-photo scs-photo-hero">
            <img src="assets/hero-cook.png" alt="Cook pulling a pizza from a wood-fired oven at golden hour" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
