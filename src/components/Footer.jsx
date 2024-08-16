import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import specific icons from free-brands-svg-icons
import { faInstagram, faYoutube, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        {/* <img src={instagram} alt="instagram-logo" />
        <img src={twitter} alt="twitter-logo" />
        <img src={youtube} alt="youtube-logo" />
        <img src={facebook} alt="facebook-logo" /> */}
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        <FontAwesomeIcon icon={faYoutube} size="2x" />
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact us</li>
      </ul>
      <p className="copyright-text">1997-2024 Netflix, Inc.</p>
    </div>
  );
}
