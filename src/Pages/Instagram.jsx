import "./Pages.scss";
import { IoGlobe, IoLogoGithub } from "react-icons/io5";
import { Link } from "react-router-dom";

import img1 from "./../assets/spotify/spotify-1.png";
import img2 from "./../assets/spotify/spotify-2.png";
import img3 from "./../assets/spotify/spotify-3.png";

const Instagram = () => {
  return (
    <div className="page page--instagram">
      <div className="page__glow"></div>
      <div className="page__title">
        <h1>Instagram Clone</h1>
        <div className="page__title-icons">
          <Link to="https://github.com/maqsudtolipov/spotify-clone">
            <IoLogoGithub />
          </Link>
          <Link to="https://maqsud-spotify.vercel.app/signup">
            <IoGlobe />
          </Link>
        </div>
      </div>
      <p>Coming soon</p>
    </div>
  );
};

export default Instagram;
