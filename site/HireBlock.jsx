/* global React */
function HireBlock() {
  return (
    <section className="scs-hire" id="hire">
      <div className="scs-container scs-hire-grid">
        <div className="scs-hire-copy">
          <span className="eyebrow">For employers</span>
          <h2 className="h2">Need a line cook or a kitchen-ready hire?</h2>
          <p className="lead">
            Our graduates show up. They've already trained in a real pizza kitchen — we placed them there.
            Tell us what you need; we'll send you candidates by Friday.
          </p>
          <div className="scs-hire-ctas">
            <button className="btn btn-primary">Hire a graduate</button>
            <a className="btn btn-ghost" href="#">See partner restaurants →</a>
          </div>
        </div>
        <aside className="card scs-hire-card">
          <div className="scs-hire-card-title">What our restaurant partners get</div>
          <ul className="scs-hire-list">
            <li><span className="scs-li-dot"></span> Pre-vetted culinary candidates within 5 business days</li>
            <li><span className="scs-li-dot"></span> A direct line to the chef trainer who worked with each one</li>
            <li><span className="scs-li-dot"></span> ServSafe-certified graduates, ready on day one</li>
            <li><span className="scs-li-dot"></span> 90-day check-ins, on us</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

window.HireBlock = HireBlock;
