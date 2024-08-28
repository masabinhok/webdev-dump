import "./topbar.css";
import Button from "../../sub-components/button/Button";

import { useState, useEffect } from "react";
import Profile from "../../sub-components/profile/Profile";
import { Link } from "react-router-dom";

export default function Topbar() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 900);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="topbar">
      {!isSmallScreen ? (
        <>
          <div className="topbarLeft">
            <Link to="/">
              <Button name="Home" color="red" />
            </Link>
            <Link to="/about">
              <Button name="About" color="orange" />
            </Link>
            <Link to="/projects">
              <Button name="Projects" color="green" />
            </Link>
            <Link to="/contact">
              <Button name="Contact" color="green" />
            </Link>
          </div>
          <div className="topbarRight">
            <Profile />
            <Button name="Resume" color="red" />
            <Button name="Hire Me" color="green" />
          </div>
        </>
      ) : (
        <div className="hamburger">
          <Profile />
          <div className="hamMenu">
            <img src="assets/more.png" alt="" />
          </div>
        </div>
        // Or you can omit this div if there's no content to render
      )}
    </div>
  );
}
