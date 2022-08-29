import React from "react";
//import { county } from "../Data/Counties";
//import { president } from "../Data/President";
import "./home.css";
import President from "./Results/President";

function Home() {
  return (
    <div className="home">
      <h1>National Presidential Results</h1>
      <President />
    </div>
  );
}

export default Home;
