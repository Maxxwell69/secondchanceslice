/* global React */
const { useState } = React;

function Header({ onApply, onHire, onOrder }) {
  return (
    <header className="scs-header">
      <div className="scs-container scs-header-inner">
        <a href="#" className="scs-lockup" aria-label="Second Chance Slice home">
          <img className="scs-logo-mark" src="../../assets/logo/secondchanceslice-mark.png" alt="" />
          <span className="scs-wordmark">
            <span className="scs-wm-a">Second Chance Slice</span>
            <span className="scs-wm-b">Rise. Train. Thrive.</span>
          </span>
        </a>
        <nav className="scs-nav">
          <a href="#program">The program</a>
          <a href="#how">How it works</a>
          <a href="#stories">Stories</a>
          <a href="#hire" onClick={(e)=>{e.preventDefault(); onHire();}}>Hire a grad</a>
          <a href="#order" onClick={(e)=>{e.preventDefault(); onOrder();}}>Order a pie</a>
        </nav>
        <button className="btn btn-primary scs-apply" onClick={onApply}>Apply now</button>
      </div>
    </header>
  );
}

window.Header = Header;
