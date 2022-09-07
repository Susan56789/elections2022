import React from 'react'
import { governor } from '../../Data/Governor'
import './cards.css'
//import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Cell } from 'recharts';

function Governor() {




    return (

        <>
            <h1>2022 Governor Race</h1>




            <div className='cards'>

                {governor.map((governor) => (

                    <div className='card'>
                        <caption>{governor.county} County</caption>
                        {

                        }
                        <tr>

                            <td>
                                <small>
                                    Total Votes: {(governor.candidate1.votes + governor.candidate2.votes +
                                        governor.candidate3.votes + governor.candidate4.votes + governor.candidate5.votes
                                        + governor.candidate6.votes + governor.candidate7.votes).toLocaleString()}
                                </small>
                            </td>
                        </tr>
                        <tbody>
                            <tr>
                                <td>Candidate Names</td>
                                <td>Party</td>
                                <td>Votes</td>
                            </tr>
                            <hr />
                            <tr>
                                <td>{governor.candidate1.name}</td>
                                <td>{governor.candidate1.party}</td>
                                <td>{(governor.candidate1.votes).toLocaleString()}</td>

                            </tr>
                            <tr>
                                <td>{governor.candidate2.name}</td>
                                <td>{governor.candidate2.party}</td>
                                <td>{(governor.candidate2.votes).toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>{governor.candidate3.name}</td>
                                <td>{governor.candidate3.party}</td>
                                <td>{(governor.candidate3.votes).toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>{governor.candidate4.name}</td>
                                <td>{governor.candidate4.party}</td>
                                <td>{(governor.candidate4.votes).toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>{governor.candidate5.name}</td>
                                <td>{governor.candidate5.party}</td>
                                <td>{(governor.candidate5.votes).toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>{governor.candidate6.name}</td>
                                <td>{governor.candidate6.party}</td>
                                <td>{(governor.candidate6.votes).toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>{governor.candidate7.name}</td>
                                <td>{governor.candidate7.party}</td>
                                <td>{(governor.candidate7.votes).toLocaleString()}</td>
                            </tr>
                        </tbody>
                    </div>
                ))
                }
            </div>
        </>
    )

}


export default Governor