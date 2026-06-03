/* global React */
function Footer() {
  return (
    <footer className="scs-footer">
      <div className="scs-container scs-footer-grid">
        <div className="scs-footer-brand">
          <a href="#" className="scs-lockup scs-lockup-dark">
            <img className="scs-logo-mark" src="assets/logo/secondchanceslice-mark.png" alt="" />
            <span className="scs-wordmark">
              <span className="scs-wm-a">Second Chance Slice</span>
              <span className="scs-wm-b">Rise. Train. Thrive.</span>
            </span>
          </a>
          <address className="scs-footer-addr">
            2400 Kensington Ave<br/>
            Philadelphia, PA 19125<br/>
            <a href="tel:2155551234">(215) 555-1234</a>
          </address>
          <div className="scs-footer-parent">
            <span className="scs-footer-parent-lbl">Operated by</span>
            <img src="assets/logo/pizzaologists-transparent.png" alt="Pizzaologists" />
          </div>
        </div>
        <div>
          <div className="scs-footer-h">Program</div>
          <a href="#">Apply</a>
          <a href="#">How it works</a>
          <a href="#">Culinary track</a>
        </div>
        <div>
          <div className="scs-footer-h">For partners</div>
          <a href="#">Hire a graduate</a>
          <a href="#">Sponsor a shift</a>
          <a href="#">Wholesale pizza</a>
          <a href="#">Press</a>
        </div>
        <div>
          <div className="scs-footer-h">About</div>
          <a href="#">First Stop Recovery</a>
          <a href="#">Pizzaologist</a>
          <a href="#">Contact</a>
          <a href="#">Annual report</a>
        </div>
      </div>
      <div className="scs-container scs-footer-bottom">
        <div className="mono">© 2026 First Stop Recovery · 501(c)(3) · EIN 00-0000000</div>
        <div className="mono"><a href="#">Privacy</a> &middot; <a href="#">Accessibility</a></div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
