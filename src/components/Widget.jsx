import React from "react";
import { useSelector } from "react-redux";
import WidgetNow from './WidgetNow';
import WidgetThen from './WeatherThen';

function Widget() {
  const state = useSelector(state => state);
  const info = state.city.city;

  return (
    <section className="widget">
      <h3 className="widget__city-title">{info}</h3>
      <WidgetNow/>
      <WidgetThen/>
    </section>
  );
}

export default Widget;
