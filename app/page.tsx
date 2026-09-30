export default function HomePage() {
  return (
    <div className="container">
      <header>
        <h1>Doge Consulting</h1>
        <p>Technical architecture & consulting.</p>
      </header>

      <section>
        <h2>About Us</h2>
        <p className="description">
          We deliver robust digital transformations, reliable systems engineering, and scalable web
          solutions. Our approach emphasizes lean execution, fast iteration cycles, and transparent
          project delivery.
        </p>
      </section>

      <section>
        <h2>Completed Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Project Alpha: Cloud Migration</h3>
            <p>
              Successfully migrated a legacy financial pipeline to a serverless AWS infrastructure,
              reducing operating overhead by 40%.
            </p>
          </div>

          <div className="project-card">
            <h3>Project Beta: Automation Pipeline</h3>
            <p>
              Designed and integrated custom CI/CD automation systems for an enterprise logistics
              partner, optimizing delivery speed.
            </p>
          </div>

          <div className="project-card">
            <h3>Project Gamma: E-Commerce Architecture</h3>
            <p>
              Overhauled a high-traffic web platform, establishing zero-downtime database layers
              capable of supporting millions of global operations.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>Contact Information</h2>
        <div className="contact-info">
          <div className="contact-item">
            <span>Email</span>
            <a href="mailto:hello@dogeconsulting.com">hello@dogeconsulting.com</a>
          </div>
          <div className="contact-item">
            <span>Location</span>
            <a href="#" style={{ pointerEvents: "none", cursor: "default" }}>
              Toronto, ON
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2026 Doge Consulting. All rights reserved.</p>
      </footer>
    </div>
  );
}
