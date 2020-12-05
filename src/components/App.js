import React from "react";
import Header from "./Header";
import Searching from "./Searching";
import Widget from "./Widget";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector(state => state);

  return (
    <div className="page">
      <Header />
      <Searching />
      {state.content ? (
        <Widget />
      ) : (
        <div className="advertising">здесь какая-то реклама</div>
      )}
    </div>
  );
}

export default App;
