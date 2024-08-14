import Navbar from '../components/Navbar';
import sh_title from '../assets/title-sh.png';
import sh_bannerTwo from '../assets/netflix-sweet-home-2.jpg';
import playbtn from '../assets/pngwing.com.png';
import moreinfo from '../assets/moreinfopng.com.png';
import TitleCard from '../components/TitleCard';
export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home-sweet">
        <img src={sh_bannerTwo} className="banner-img" />
        <div className="hs-caption">
          <img src={sh_title} className="caption-img" />
          <p>
            Hyun, a loner high school student who lost his entire family in a terrible accident, is
            forced to leave his home and has to face a new reality where monsters are trying to wipe
            out all of humanity.
          </p>
          <div className="hs-btns">
            <button className="btn">
              <img src={playbtn} alt="play-button" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={moreinfo} alt="moreinfo-button" />
              More Info
            </button>
          </div>
          <TitleCard />
        </div>
      </div>
    </div>
  );
}
