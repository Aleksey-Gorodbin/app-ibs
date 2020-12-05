import React from "react";
import { useSelector } from "react-redux";

function WidgetNow() {
  const state = useSelector(state => state);
  const info = state.weather.weather.data[0];
  return (
    <div className="widget__weather-now">
      <img
        src={`https://www.weatherbit.io/static/img/icons/${info.weather.icon}.png`}
        className="widget__icon"
      />
      <p className="widget__temperature-now">{`${info.temp}C°`}</p>
      <ul className="widget__details">
        <li className="widget__details-item">{info.weather.description}</li>
        <li className="widget__details-item">{`Скорость ветра ${info.wind_spd} м/с`}</li>
        <li className="widget__details-item">{`Давление ${info.pres}`}</li>
      </ul>
    </div>
  );
}

export default WidgetNow;
