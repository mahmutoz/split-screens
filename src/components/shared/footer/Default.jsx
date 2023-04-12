import React from "react";
import styles from "./Default.module.scss";

function Default() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <span>ENERJİ PİYASALARI İŞLETME A.Ş.</span>
        <span>v1.0.0</span>
      </div>
    </footer>
  );
}

export default Default;
