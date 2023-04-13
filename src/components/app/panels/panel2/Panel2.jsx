import React from "react";
import {useSelector} from "react-redux";
import styles from "./Panel2.module.scss"

function PanelCardItem({subtitle, value}) {
  const formattedValue = (value) => {
    if (!value) {
      return "";
    }
    return `%${value.toFixed(8)}`;
  }
  return (
    <div className={styles.card__item}>
      <h6>{subtitle}</h6>
      {
        value ?
          <div className={styles.card__text}>
            <span>{formattedValue(value[0])}</span>
            <span>{formattedValue(value[1])}</span>
          </div> :
          ""
      }
    </div>
  );
}

function Panel2() {
  const {horizontalScreen, topVerticalScreen, bottomVerticalScreen} = useSelector((state) => state.screenSizeReducer);

  return (
    <div className={styles.card}>
      <div className={styles.card__inner}>
        <h6 className={styles.card__title}>Ayarlar</h6>
        <PanelCardItem subtitle="Yatay Pencere Değerleri:" value={horizontalScreen}/>
        <PanelCardItem subtitle="Üst Dikey Pencere Değerleri:" value={topVerticalScreen}/>
        <PanelCardItem subtitle="Alt Dikey Pencere Değerleri:" value={bottomVerticalScreen}/>
      </div>
    </div>
  );
}

export default Panel2;
