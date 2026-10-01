import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <h2>IRONFIT</h2>

        <div className="links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#plans">Plans</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div>
          <p className="small-title">YOUR BODY. YOUR POWER.</p>
          <h1>BUILD YOUR<br />BEST VERSION.</h1>

          <p className="hero-text">
            Train harder. Get stronger. Become unstoppable.
          </p>

          <button>JOIN NOW</button>
        </div>
      </section>

      <section className="about" id="about">
        <p className="section-title">ABOUT US</p>
        <h2>MORE THAN A GYM</h2>

        <p>
          IRONFIT is a modern fitness center focused on helping people
          become stronger, healthier and more confident.
        </p>
      </section>

      <section className="services" id="services">
        <p className="section-title">WHAT WE OFFER</p>
        <h2>OUR SERVICES</h2>

        <div className="cards">
          <div className="card">
            <h3>Strength Training</h3>
            <p>Build strength with professional equipment and guidance.</p>
          </div>

          <div className="card">
            <h3>Personal Training</h3>
            <p>Get personalized workouts designed for your goals.</p>
          </div>

          <div className="card">
            <h3>Cardio Training</h3>
            <p>Improve your stamina and overall fitness.</p>
          </div>
        </div>
      </section>

      <section className="plans" id="plans">
        <p className="section-title">MEMBERSHIP</p>
        <h2>CHOOSE YOUR PLAN</h2>

        <div className="cards">
          <div className="plan">
            <h3>MONTHLY</h3>
            <h4>₹999</h4>
            <p>Gym Access</p>
            <p>Cardio Area</p>
            <p>Locker Facility</p>
            <button>GET STARTED</button>
          </div>

          <div className="plan featured">
            <h3>QUARTERLY</h3>
            <h4>₹2499</h4>
            <p>Gym Access</p>
            <p>Personal Guidance</p>
            <p>Locker Facility</p>
            <button>GET STARTED</button>
          </div>

          <div className="plan">
            <h3>YEARLY</h3>
            <h4>₹7999</h4>
            <p>Full Gym Access</p>
            <p>Personal Training</p>
            <p>Diet Guidance</p>
            <button>GET STARTED</button>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-title">GET IN TOUCH</p>
        <h2>START YOUR FITNESS JOURNEY</h2>

        <p>📍 Hyderabad, Telangana</p>
        <p>📞 +91 98765 43210</p>
        <p>✉️ hello@ironfit.com</p>

        <button>CONTACT US</button>
      </section>

      <footer>
        <p>© 2026 IRONFIT. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;