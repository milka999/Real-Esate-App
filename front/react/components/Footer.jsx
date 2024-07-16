export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>123 Real Estate St.</p>
          <p>City, State, ZIP</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@realestateagency.com</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <p>
            <a href="/about-us">About Us</a>
          </p>
          <p>
            <a href="/properties">Properties</a>
          </p>
          <p>
            <a href="/agents">Our Agents</a>
          </p>
          <p>
            <a href="/contact">Contact</a>
          </p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-media">
            <a href="#" aria-label="Facebook">
              <img src="path/to/facebook-icon.png" alt="Facebook" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src="path/to/twitter-icon.png" alt="Twitter" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src="path/to/instagram-icon.png" alt="Instagram" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src="path/to/linkedin-icon.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
        {/* <div className="footer-section">
          <h3>About Our Agency</h3>
          <p>
            At Real Estate Agency, we provide the best properties and services
            to help you find your dream home. Our team of experienced agents are
            dedicated to guiding you through every step of the real estate
            process.
          </p>
        </div> */}
      </div>
      <p>&copy; 2024 Real Estate Agency. All rights reserved.</p>
    </footer>
  );
}
