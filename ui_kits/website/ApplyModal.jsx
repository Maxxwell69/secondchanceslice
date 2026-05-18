/* global React */
const { useState: useApplyState } = React;

function ApplyModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  if (!open) return null;
  return (
    <div className="scs-modal-scrim" onClick={onClose}>
      <div className="scs-modal" onClick={(e)=>e.stopPropagation()}>
        <button className="scs-modal-close" onClick={onClose} aria-label="Close">×</button>
        {!submitted ? (
          <>
            <span className="eyebrow">Apply · Cohort 14</span>
            <h2 className="h2 scs-modal-h">Show up Tuesday.<br/>This just gets us your phone number.</h2>
            <p className="scs-modal-help">If you've been home less than a year, you qualify. No GED needed. No background-check gate.</p>
            <form className="scs-modal-form" onSubmit={(e)=>{e.preventDefault(); setSubmitted(true);}}>
              <div className="scs-field">
                <label>Your name</label>
                <input className="input" placeholder="As it appears on your ID" required/>
              </div>
              <div className="scs-field">
                <label>Phone</label>
                <input className="input" placeholder="(215)" required/>
              </div>
              <div className="scs-field">
                <label>Which track sounds right today?</label>
                <select className="select">
                  <option>Culinary (pizza kitchen)</option>
                  <option>Construction</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <button className="btn btn-primary scs-modal-submit" type="submit">Save my seat</button>
              <div className="scs-modal-foot">We'll text you Tuesday's address. We don't share your number with anyone.</div>
            </form>
          </>
        ) : (
          <div className="scs-modal-success">
            <div className="scs-success-mark">
              <img src="../../assets/logo/secondchanceslice-mark.png" alt="" style={{height:'72px', width:'auto'}} />
            </div>
            <h2 className="h2">Got it. We'll text you Tuesday's address.</h2>
            <p>Look out for a text from a (215) number Monday afternoon. Show up at 10am — bring an ID if you have one. If you don't, come anyway.</p>
            <button className="btn btn-secondary" onClick={onClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}

window.ApplyModal = ApplyModal;
