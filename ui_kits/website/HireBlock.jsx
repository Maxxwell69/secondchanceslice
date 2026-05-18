/* global React */
function HireBlock() {
  return (
    <section className="scs-hire" id="hire">
      <div className="scs-container scs-hire-grid">
        <div className="scs-hire-copy">
          <span className="eyebrow">For employers</span>
          <h2 className="h2">Need a line cook, a framer, or a drywall apprentice?</h2>
          <p className="lead">
            Our graduates show up. They've already passed a background check we know cold — because we
            placed them there. Tell us what you need; we'll send you three candidates by Friday.
          </p>
          <div className="scs-hire-ctas">
            <button className="btn btn-primary">Hire a graduate</button>
            <a className="btn btn-ghost" href="#">See partner employers →</a>
          </div>
        </div>
        <aside className="card scs-hire-card">
          <div className="scs-hire-card-title">What our employer partners get</div>
          <ul className="scs-hire-list">
            <li><span className="scs-li-dot"></span> Three pre-vetted candidates within 5 business days</li>
            <li><span className="scs-li-dot"></span> A direct line to the trainer who worked with each one</li>
            <li><span className="scs-li-dot"></span> 90-day check-ins, on us</li>
            <li><span className="scs-li-dot"></span> Federal WOTC paperwork pre-filed</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

window.HireBlock = HireBlock;
