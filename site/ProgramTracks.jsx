/* global React */
function ProgramTracks() {
  return (
    <section className="scs-program" id="program">
      <div className="scs-container">
        <div className="scs-section-head">
          <span className="eyebrow">Our program</span>
          <h2 className="h2">Two tracks. Same paycheck. Both end with a job.</h2>
        </div>
        <div className="scs-tracks">
          <article className="card card-accent scs-track">
            <div className="scs-track-glyph">
              <object data="assets/glyphs/apron.svg" type="image/svg+xml" width="40" height="40"></object>
            </div>
            <span className="pill pill-red">Culinary</span>
            <h3 className="h3">The kitchen.</h3>
            <p>Eight weeks at the oven, eight weeks running the line. ServSafe certified. You graduate ready for a line-cook job at our shop, a sister restaurant, or anywhere across Philly.</p>
            <ul className="scs-track-list">
              <li><span>·</span> Dough, sauce, prep, fire-handling</li>
              <li><span>·</span> ServSafe Food Handler certification</li>
              <li><span>·</span> Two weeks on Friday-night line</li>
            </ul>
          </article>
          <article className="card card-accent scs-track">
            <div className="scs-track-glyph">
              <object data="assets/glyphs/hardhat.svg" type="image/svg+xml" width="40" height="40"></object>
            </div>
            <span className="pill pill-red">Construction</span>
            <h3 className="h3">The trades.</h3>
            <p>Framing, drywall, finish carpentry — taught on real jobsites with our partner contractors in North and West Philly. You leave with OSHA-10 and a foreman's number in your phone.</p>
            <ul className="scs-track-list">
              <li><span>·</span> Framing, rough carpentry, finish work</li>
              <li><span>·</span> OSHA-10 safety certification</li>
              <li><span>·</span> Direct intro to 4 partner contractors</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

window.ProgramTracks = ProgramTracks;
