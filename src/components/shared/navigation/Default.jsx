import React from "react";
import TableLayoutIcon from "@/assets/img/icons/table-layout.svg";
import SaveIcon from "@/assets/img/icons/floppy-disk.svg";
import styles from "./Default.module.scss";
import {useSelector} from "react-redux";

function Default() {
  const userFirstName = "Mahmut";
  const {isSaved} = useSelector((state) => state.screenSizeReducer);

  const getFirstAndSecondsLetters = (name) => {
    return name.slice(0, 2).toUpperCase();
  }
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__inner}>
        <li className={styles.nav__item}>
          <button type="button" className={isSaved ? styles.nav__green : ""}>
            <img src={isSaved ? SaveIcon : TableLayoutIcon} width={24} height={24} alt="icon"/>
          </button>
          <span>Çalışma Alanı 1</span>
        </li>
        <li className={styles.nav__item}>
          <div className={styles.nav__fullname}>{getFirstAndSecondsLetters(userFirstName)}</div>
          <span>Merhaba, <strong>{userFirstName}</strong></span>
        </li>
      </ul>
    </nav>
  );
}

export default Default;
