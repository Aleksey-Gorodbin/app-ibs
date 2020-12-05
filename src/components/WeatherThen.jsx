import React from "react";
import { useSelector } from "react-redux";

function WeatherThen() {
  const state = useSelector((state) => state);
  const info = state.weather.weather.data.filter(function (item, index) {
    return index % 8 === 0;
  });

  return (
    <div className="widget__weather-then">
      {info.map((card, index) => (
        <div className="widget__weather-params" key={index}>
          <p className="widget__params-then">{card.datetime.split(':')[0]}</p>
          <img
            src={`https://www.weatherbit.io/static/img/icons/${card.weather.icon}.png`}
            className="widget__icon widget__icon_then"
          />
          <p className="widget__params-then">{`${card.temp} °C`}</p>
          <p className="widget__params-then">{card.weather.description}</p>
        </div>
      ))}
    </div>
  );
}

export default WeatherThen;
