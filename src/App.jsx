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
        <div className="hero-content">
          <p className="tagline">TRAIN HARD • STAY STRONG</p>

          <h1>
            BUILD YOUR
            <br />
            <span>BEST VERSION.</span>
          </h1>

          <p className="hero-description">
            Premium fitness training designed to help you become
            stronger, healthier and more confident.
          </p>

          <div className="hero-buttons">
            <button>START TRAINING</button>
            <a href="#plans">VIEW PLANS</a>
          </div>
        </div>

        <div className="hero-card">
          <p>MEMBERSHIP STARTS FROM</p>
          <h3>₹999</h3>
          <span>PER MONTH</span>
        </div>
      </section>

      <section className="stats">
        <div>
          <h2>5+</h2>
          <p>Years Experience</p>
        </div>

        <div>
          <h2>500+</h2>
          <p>Happy Members</p>
        </div>

        <div>
          <h2>10+</h2>
          <p>Expert Trainers</p>
        </div>

        <div>
          <h2>24/7</h2>
          <p>Gym Access</p>
        </div>
      </section>

      <section className="about" id="about">
        <p className="section-title">ABOUT IRONFIT</p>

        <h2>STRONGER EVERY DAY.</h2>

        <p>
          IRONFIT is a modern fitness center focused on strength,
          discipline and long-term results. Our trainers and equipment
          are designed to give every member the right environment to
          achieve their fitness goals.
        </p>
      </section>

      <section className="services" id="services">
        <p className="section-title">WHAT WE OFFER</p>

        <h2>TRAIN WITH PURPOSE.</h2>

        <div className="cards">
          <div className="card">
            <div className="number">01</div>
            <h3>Strength Training</h3>
            <p>
              Build muscle and improve your overall strength with
              structured training.
            </p>
          </div>

          <div className="card">
            <div className="number">02</div>
            <h3>Personal Training</h3>
            <p>
              Get personalized workouts and guidance from experienced
              trainers.
            </p>
          </div>

          <div className="card">
            <div className="number">03</div>
            <h3>Cardio Training</h3>
            <p>
              Improve stamina, endurance and cardiovascular fitness.
            </p>
          </div>
        </div>
      </section>

      <section className="plans" id="plans">
        <p className="section-title">MEMBERSHIP PLANS</p>

        <h2>CHOOSE YOUR PLAN.</h2>

        <div className="cards">
          <div className="plan">
            <p>MONTHLY</p>
            <h3>₹999</h3>
            <span>per month</span>

            <div className="features">
              <p>✓ Full Gym Access</p>
              <p>✓ Cardio Area</p>
              <p>✓ Locker Facility</p>
            </div>

            <button>JOIN NOW</button>
          </div>

          <div className="plan popular">
            <div className="popular-label">POPULAR</div>

            <p>QUARTERLY</p>
            <h3>₹2499</h3>
            <span>3 months</span>

            <div className="features">
              <p>✓ Full Gym Access</p>
              <p>✓ Personal Guidance</p>
              <p>✓ Locker Facility</p>
            </div>

            <button>JOIN NOW</button>
          </div>

          <div className="plan">
            <p>YEARLY</p>
            <h3>₹7999</h3>
            <span>12 months</span>

            <div className="features">
              <p>✓ Full Gym Access</p>
              <p>✓ Personal Training</p>
              <p>✓ Diet Guidance</p>
            </div>

            <button>JOIN NOW</button>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-title">CONTACT</p>

        <h2>READY TO GET STRONGER?</h2>

        <p>📍 Hyderabad, Telangana</p>
        <p>📞 +91 98765 43210</p>

        <button>CONTACT US</button>
      </section>

      <a
        className="whatsapp"
        href="https://wa.me/919876543210"
        target="_blank"
      >
        WhatsApp
      </a>

      <footer>
        <p>© 2026 IRONFIT FITNESS. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;