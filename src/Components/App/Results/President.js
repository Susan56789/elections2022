import React from "react";
import { president } from "../../Data/President";
import "./cards.css";

export default function President() {
  return (
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
              <tr>
                <td> {president.candidate1.name}</td>
                <td> {president.candidate1.party}</td>
                <td> {president.candidate1.votes}</td>
              </tr>
              <tr>
                <td> {president.candidate2.name}</td>
                <td> {president.candidate2.party}</td>
                <td> {president.candidate2.votes}</td>
              </tr>
              <tr>
                <td> {president.candidate3.name}</td>
                <td> {president.candidate3.party}</td>
                <td> {president.candidate3.votes}</td>
              </tr>
              <tr>
                <td> {president.candidate4.name}</td>
                <td> {president.candidate4.party}</td>
                <td> {president.candidate4.votes}</td>
              </tr>
            </tbody>
          </div>
        </>
      ))}
    </div>
  );
}
