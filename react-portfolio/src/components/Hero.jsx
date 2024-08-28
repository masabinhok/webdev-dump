import React from "react";
import Navbar from "./Navbar";
import styles from "./Hero.module.css";
import Profile from "./Profile";

const Hero = () => {
  return (
    <div className={styles.portfolio}>
      <Navbar />
      <div className={styles.bentoGrid}>
        <Profile/>
      </div>
    </div>
  );
};

export default Hero;
