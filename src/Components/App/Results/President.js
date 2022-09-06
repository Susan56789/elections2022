import React from "react";
import { president } from "../../Data/President";
import "./cards.css";

export default function President() {
  return (
    <>
<<<<<<< HEAD
      <h2>Official Presidential Results Per County</h2>
=======
      <h1>Presidential Results Per County</h1>
>>>>>>> b319bf4ca1cfdd1001d2db31afcb5eec46dc5681
      <div className="cards">
        {president.map((president) => (
          <>
            <div className="card">
              <caption>{president.county} County</caption>

              <tbody>
                <tr>
                  <td>Candidate Names</td>
                  <td>Party</td>
                  <td>Votes</td>
                </tr>
<<<<<<< HEAD
                <hr />
                <tr>
                  <td> {president.candidate1.name}</td>
                  <td> {president.candidate1.party}</td>
                  <td> {(president.candidate1.votes).toLocaleString()}</td>
=======
                <tr>
                  <td> {president.candidate1.name}</td>
                  <td> {president.candidate1.party}</td>
                  <td> {president.candidate1.votes}</td>
>>>>>>> b319bf4ca1cfdd1001d2db31afcb5eec46dc5681
                </tr>
                <tr>
                  <td> {president.candidate2.name}</td>
                  <td> {president.candidate2.party}</td>
<<<<<<< HEAD
                  <td> {(president.candidate2.votes).toLocaleString()}</td>
=======
                  <td> {president.candidate2.votes}</td>
>>>>>>> b319bf4ca1cfdd1001d2db31afcb5eec46dc5681
                </tr>
                <tr>
                  <td> {president.candidate3.name}</td>
                  <td> {president.candidate3.party}</td>
<<<<<<< HEAD
                  <td> {(president.candidate3.votes).toLocaleString()}</td>
=======
                  <td> {president.candidate3.votes}</td>
>>>>>>> b319bf4ca1cfdd1001d2db31afcb5eec46dc5681
                </tr>
                <tr>
                  <td> {president.candidate4.name}</td>
                  <td> {president.candidate4.party}</td>
<<<<<<< HEAD
                  <td> {(president.candidate4.votes).toLocaleString()}</td>
=======
                  <td> {president.candidate4.votes}</td>
>>>>>>> b319bf4ca1cfdd1001d2db31afcb5eec46dc5681
                </tr>
              </tbody>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
