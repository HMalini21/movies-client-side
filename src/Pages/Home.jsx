import Navbar from '../components/Navbar';
import sh_banner from '../assets/sweethome1.webp';
import sh_title from '../assets/title-sh.png';

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={sh_banner} className="banner-img" />
        <div>
          <img src={sh_title} className="caption-img" />
          <p>
            Hyun, a loner high school student who lost his entire family in a terrible accident, is
            forced to leave his home and has to face a new reality where monsters are trying to wipe
            out all of humanity. Now he must fight against all odds to try and race against the
            clock to save what is left of the human race before it's too late.
          </p>
        </div>
      </div>
    </div>
  );
}
