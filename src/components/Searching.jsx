import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCity, setCoordinates, setData } from "../redux/actions/index";
import * as api from "../utils/api";

function Searching() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  
  function handleChangeParam(e) {
    dispatch(setCity(e.target.value));
  }

  function getCoordinates() {
    api
      .getСoordinates(state.city.city)
      .then((res) => {
        let arr = res.split(" ");
        dispatch(setCoordinates(arr));
      })
      .catch((err) => console.log(err));
  }

  React.useEffect(() => {
    getCoordinates();
  }, [state.city.city])

  function getWeather() {
    api
      .getWeather(
        state.coordinates.coordinates[1],
        state.coordinates.coordinates[0]
      )
      .then((res) => {
        dispatch(setData(res));
      })
      .catch((err) => console.log(err));
  }

  function submitForm(e) {
    e.preventDefault();
    getWeather();
  }

  return (
    <section className="searching">
      <form className="searching__form">
        <input
          className="searching__input"
          onChange={handleChangeParam}
          value={state.city.city || ""}
          placeholder="Введите название города"
        />
        <button className="searching__button" onClick={submitForm}>
          найти
        </button>
      </form>
    </section>
  );
}

export default Searching;
