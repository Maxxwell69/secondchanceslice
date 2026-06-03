/* global React */
function ProgramTracks() {
  return (
    <section className="scs-program" id="program">
      <div className="scs-container">
        <div className="scs-section-head">
          <span className="eyebrow">Our program</span>
          <h2 className="h2">The kitchen. A paycheck from day one.</h2>
        </div>
        <div className="scs-tracks">
          <article className="card card-accent scs-track">
            <div className="scs-track-glyph">
              <object data="assets/glyphs/apron.svg" type="image/svg+xml" width="40" height="40"></object>
            </div>
            <span className="pill pill-red">Culinary</span>
            <h3 className="h3">The kitchen.</h3>
            <p>Time at the oven and on the line. ServSafe certified. You graduate ready for a line-cook job at our shop, a sister restaurant, or anywhere across Philly.</p>
            <ul className="scs-track-list">
              <li><span>·</span> Dough, sauce, prep, fire-handling</li>
              <li><span>·</span> ServSafe Food Handler certification</li>
              <li><span>·</span> Time on Friday-night line</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

window.ProgramTracks = ProgramTracks;
