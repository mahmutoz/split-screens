import React from "react";
import {useSelector} from "react-redux";
import styles from "./Panel2.module.scss"
import CardItem from "./CardItem";


function Panel2() {
  const {
    horizontalScreen,
    topVerticalScreen,
    bottomVerticalScreen
  } = useSelector((state) => state.screenSizeReducer);

  return (
    <div className={styles.card}>
      <div className={styles.card__inner}>
        <h6 className={styles.card__title}>Ayarlar</h6>
        <CardItem
          subtitle="Yatay Pencere Değerleri:"
          value={horizontalScreen}
          type="horizontalScreen"
        />
        <CardItem
          subtitle="Üst Dikey Pencere Değerleri:"
          value={topVerticalScreen}
          type="topVerticalScreen"
        />
        <CardItem
          subtitle="Alt Dikey Pencere Değerleri:"
          value={bottomVerticalScreen}
          type="bottomVerticalScreen"
        />
      </div>
    </div>
  );
}

export default Panel2;
