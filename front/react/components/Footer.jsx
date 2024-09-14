export default function Footer() {
  return (
    <>
      <footer className="flex bg-black text-white justify-around mt-5 p-5">
        <div className="footer-section">
          <h3 className="text-green-600">Contact Us</h3>
          <p>123 Real Estate St. City, State, ZIP</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@realestateagency.com</p>
        </div>
        <div className="footer-section">
          <h3 className="text-green-600">Follow Us</h3>
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
      </footer>
      <p className="text-green-600 text-center bg-black p-2">
        &copy; 2024 Real Estate Agency. All rights reserved.
      </p>
    </>
  );
}
