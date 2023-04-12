import React from "react";
import Logo from "@/assets/img/logos/logo-white.svg";
import styles from "./Default.module.scss";

function Default() {
  return (
    <header className={styles.topbar}>
      <div className={styles.topbarInner}>
        <a href="/" className={styles.topbarLogo} role="link">
          <img src={Logo} alt="Logo"/>
        </a>
        <div className="topbar__nav">{/*<Nav />*/}</div>
      </div>
    </header>
  );
}

export default Default;
