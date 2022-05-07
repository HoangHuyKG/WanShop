import React from 'react'
import styles from "../Styles/header.module.css"

export default function Header() {
  return (
    <header className={styles.rootheader}>
      <div className={styles.header}>
        <div className={styles.header_logo}>
          <img className={styles.header_logo_image} src={require("../Assets/img/logo.png")} alt="logo"/>
          <div className={styles.header_logo_text}>Wanshop</div>
        </div>
        <div className={styles.header_nav}>
            <div className={styles.header_nav_text}>TRANG CHỦ</div>
            <div className={styles.header_nav_text}>LIÊN HỆ</div>
        </div>
      </div>
    </header>
  )
}
