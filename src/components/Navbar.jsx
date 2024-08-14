import Netflix from '../assets/netflix-logo.png';
import search from '../assets/search_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png';
import profile from '../assets/avatar3.png';
import bell from '../assets/notifications_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png';
import arrow from '../assets/arrow_drop_down_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className=" navbar-left">
        <img src={Netflix} alt="Netflex-logo" className="net-Logo" />
        <ul className="navbar-left">
          <li>
            {/* <Link to="/Home"> */}
            Home
          </li>
          <li>
            {/* <Link to="/TvShow"> */}
            TvShow
          </li>
          <li>
            {/* <Link to="/Movies"> */}
            Movies
          </li>
          <li>
            {/* <Link to="/Tv"> */}
            New & Popular
          </li>
          <li>
            {/* <Link to="/MyList"> */}
            My List
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={bell} alt="bell-icon" className="icons" />
        <img src={search} alt="search-icon" className="icons" />
        <div className="navbar-profile">
          <img src={profile} alt="profile-icon" className="profile" />
          <img
            src={arrow}
            alt="arrow-icon"
            className="arrow"
            // onClick={() => setIsSelect(!isSelect)}
          />
          <div className="dropdown">
            <p>Sign Out Of Netflix</p>
          </div>
        </div>
        {/* {isSelect && (
          <div className="drop-down">
            <p>Sign Out</p>
          </div>
        )} */}
      </div>
    </div>
  );
}
