import {useSelector} from "react-redux";
import styles from "./Panel2.module.scss";
import React from "react";

function CardItem({subtitle, value, type}) {
  const {isSaved, changedFields} = useSelector((state) => state.screenSizeReducer);

  const formattedValue = (value) => {
    if (!(isSaved && changedFields[type])) {
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

export default CardItem;
