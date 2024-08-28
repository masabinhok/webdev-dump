import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <span>Sabin,</span>
        <p>Front-end</p>
      </div>
      <div className={styles.right}>
        <div className="home">Home</div>
        <div className="skills">Skills</div>
        <div className="contact">Contact</div>
      </div>
    </div>
  );
}
