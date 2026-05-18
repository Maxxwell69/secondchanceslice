/* global React */
function DonateBlock() {
  return (
    <section className="scs-donate">
      <div className="scs-container scs-donate-inner">
        <div className="scs-donate-glyph">
          <object data="../../assets/glyphs/paycheck.svg" type="image/svg+xml" width="56" height="56"></object>
        </div>
        <div className="scs-donate-copy">
          <span className="eyebrow" style={{color:'rgba(250,238,218,0.7)'}}>Support the program</span>
          <h2 className="h2">Don't sponsor a person. Sponsor a shift.</h2>
          <p>
            $40 covers an apprentice's wage for one Friday night. $640 covers a full 16-week run.
            Every dollar goes to wages — never to a brochure.
          </p>
        </div>
        <div className="scs-donate-ctas">
          <button className="btn btn-primary">Sponsor a shift · $40</button>
          <button className="btn btn-secondary scs-donate-secondary">Sponsor a cohort · $640</button>
        </div>
      </div>
    </section>
  );
}

window.DonateBlock = DonateBlock;
