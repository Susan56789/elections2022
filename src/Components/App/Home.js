import React from "react";
import "./home.css";
import Total from "./Total";

function Home() {
  return (
    <div className="home">
      <h1>Kenya Elections 2022</h1>



      <p>
        <span>
          General elections were held in Kenya on 9 August 2022.
          Voters elected the President, members of the National Assembly and Senate,
          county governors of Kenya and members of the 47 county assemblies of Kenya.
          General elections in Kenya are held every five years.
          This was the third general election and the fourth presidential one since the promulgation of the 2010 constitution.
          The incumbent president Uhuru Kenyatta was not eligible for a third term, nor were two-term county governors as
          stated by the country's laws.
          The 2022 general election saw the lowest number of presidential candidates cleared since the
          multi-party system was implemented in 1992. All parliamentarians elected will sit in the 13th Parliament of Kenya.
        </span>
      </p>
      <br />

      <h2>National Presidential Results</h2>
      <Total />

    </div>
  );
}

export default Home;
