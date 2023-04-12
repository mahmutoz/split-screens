import React from "react";
import {useSelector} from "react-redux";

function PanelCardItem({subtitle, value}) {
  const formattedValue = (value) => {
    if (!value) {
      return "";
    }
    return `%${value}`;
  }
  return (
    <div className="card__item">
      <p className="card__subtitle">{subtitle}</p>
      <div className="card__text">
        <span>{formattedValue(value[0])}</span>
        &nbsp;
        <span>{formattedValue(value[1])}</span>
      </div>
    </div>
  );
}

function Panel2() {
  const {horizontalScreen, topVerticalScreen, bottomVerticalScreen} = useSelector((state) => state.screenSizeSlice);

  return (
    <div className="card">
      <h5 className="card__title">Ayarlar</h5>
      <div className="card__body">
        <PanelCardItem subtitle="Yatay Pencere Değerleri:" value={horizontalScreen}/>
        <PanelCardItem subtitle="Üst Dikey Pencere Değerleri:" value={topVerticalScreen}/>
        <PanelCardItem subtitle="Alt Dikey Pencere Değerleri:" value={bottomVerticalScreen}/>
      </div>
    </div>
  );
}

export default Panel2;
