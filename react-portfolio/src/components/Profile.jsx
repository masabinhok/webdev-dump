import React from 'react'
import styles from './Profile.module.css'

export default function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.row1}>
        <div className={styles.left}>
          <div className={styles.profilePic}>
            <img src="./assets/wau.png" alt="profile-pic" />
          </div>
          <div className={styles.profileIntro}>
            <div className={styles.hi}>Hi, I'm Sabin</div>
            <div className={styles.role}>Front-end developer</div>
          </div>
        </div>
        <div className={styles.right}>
          <img src="./assets/twitter.png" alt="" />
          <img src="./assets/linkedin.png" alt="" />
          <img src="./assets/github.png" alt="" />
        </div>
      </div>
      <div className={styles.row2}>
        Frontend developer, What i do is ART!
      </div>
      <div className={styles.row3}>
      A passionate student exploring life as a work of art, highly focused on frontend coding and creativity, believing there is nothing they cannot achieve.
      </div>
    </div>
  )
}
