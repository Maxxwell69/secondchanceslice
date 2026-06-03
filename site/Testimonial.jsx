/* global React */
function Testimonial() {
  return (
    <section className="scs-quote" id="stories">
      <div className="scs-container scs-quote-grid">
        <div className="scs-quote-photo">
          <div className="scs-photo scs-photo-portrait">
            <img src="assets/marcus-portrait.png" alt="Marcus Williams, Cohort 9 graduate, in the kitchen" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top',display:'block'}} />
          </div>
        </div>
        <div className="scs-quote-body">
          <span className="scs-quote-mark">&ldquo;</span>
          <blockquote className="quote">
            I came home with $40 and a bus pass. Eight weeks in I had a paycheck and a ServSafe card.
            Now I run Friday-night line.
          </blockquote>
          <div className="scs-quote-attr">
            <div className="scs-attr-name">Marcus Williams</div>
            <div className="scs-attr-role">Cohort 9 graduate · Line cook, Pizzaologist Fishtown</div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Testimonial = Testimonial;
