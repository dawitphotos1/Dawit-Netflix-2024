// import React from "react";
import "./header.css";
import NetflixLogo from "../../assets/Netflix_Logo_PMS.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={NetflixLogo} alt="Netflix Logo" width="100" />
            </li>
            <li>
              <a href="/" aria-label="Netflix Home">
                Netflix
              </a>
            </li>
            <li>
              <a href="/" aria-label="Home">
                Home
              </a>
            </li>
            <li>
              <a href="/" aria-label="TV Shows">
                TV Shows
              </a>
            </li>
            <li>
              <a href="/" aria-label="Movies">
                Movies
              </a>
            </li>
            <li>
              <a href="/" aria-label="Latest">
                Latest
              </a>
            </li>
            <li>
              <a href="/" aria-label="My List">
                My List
              </a>
            </li>
            <li>
              <a href="/" aria-label="Browse by Languages">
                Browse by Languages
              </a>
            </li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon aria-label="Search" />
            </li>
            <li>
              <NotificationsNoneIcon aria-label="Notifications" />
            </li>
            <li>
              <AccountBoxIcon aria-label="Account" />
            </li>
            <li>
              <ArrowDropDownIcon aria-label="Dropdown" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
