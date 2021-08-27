import { useState, useRef } from "react";
import "./navbar.css";
import { BiSearch } from "react-icons/bi";

import { GiHamburgerMenu } from "react-icons/gi";
export const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [bgcolor, setbgcolor] = useState(true);
  return (
    <div>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>.nullBrains</h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>Home</li>
            <li>about</li>
            <li>services</li>
            <li>contact</li>
            <li className="search-icon">
              <BiSearch />
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <button
                className="btn-signin"
                onClick={() => {
                  setbgcolor(!bgcolor);
                }}
                style={{
                  backgroundColor: bgcolor ? "#3f37c9" : "",
                  color: bgcolor ? "white" : "",
                }}
              >
                Sign In
              </button>
            </li>
            <li>
              <button
                className="btn-signup"
                onClick={() => {
                  setbgcolor(!bgcolor);
                }}
                style={{
                  backgroundColor: bgcolor ? "" : "#3f37c9",
                  color: bgcolor ? "" : "white",
                }}
              >
                Sign Up
              </button>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};
