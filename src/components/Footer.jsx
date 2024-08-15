import instagram from '../assets/pngwing.com (2).png';
import twitter from '../assets/pngwing.com.png';
import youtube from '../assets/pngwing.com (1).png';
import facebook from '../assets/pngwing.com (3).png';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={instagram} alt="instagram-logo" />
        <img src={twitter} alt="twitter-logo" />
        <img src={youtube} alt="youtube-logo" />
        <img src={facebook} alt="facebook-logo" />
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
