
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

                        <tr>

                            <td>
                                <small>
                                    Total Votes: {(governor.candidate1.votes + governor.candidate2.votes +
                                        governor.candidate3.votes + governor.candidate4.votes + governor.candidate5.votes
                                        + governor.candidate6.votes + governor.candidate7.votes + governor.candidate8.votes
                                        + governor.candidate9.votes + governor.candidate10.votes + governor.candidate11.votes
                                        + governor.candidate12.votes + governor.candidate13.votes).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                </small>
                            </td>
                        </tr>
                        <tbody className='data'>
                            <tr>
                                <td>Candidate Names</td>
                                <td>Party</td>
                                <td>Votes</td>
                            </tr>
                            <div className='border' id='border'></div>
                            <tr className='item-row'>
                                <td>{governor.candidate1.name}</td>
                                <td>{governor.candidate1.party}</td>
                                <td>{(governor.candidate1.votes).toLocaleString()}</td>

                            </tr>
                            <tr className='item-row'>
                                <td>{governor.candidate2.name}</td>
                                <td>{governor.candidate2.party}</td>
                                <td>{(governor.candidate2.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{governor.candidate3.name}</td>
                                <td>{governor.candidate3.party}</td>
                                <td>{(governor.candidate3.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{governor.candidate4.name}</td>
                                <td>{governor.candidate4.party}</td>
                                <td>{(governor.candidate4.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{governor.candidate5.name}</td>
                                <td>{governor.candidate5.party}</td>
                                <td>{(governor.candidate5.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{governor.candidate6.name}</td>
                                <td>{governor.candidate6.party}</td>
                                <td>{(governor.candidate6.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{governor.candidate7.name}</td>
                                <td>{governor.candidate7.party}</td>
                                <td>{(governor.candidate7.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{governor.candidate8.name}</td>
                                <td>{governor.candidate8.party}</td>
                                <td>{(governor.candidate8.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{governor.candidate9.name}</td>
                                <td>{governor.candidate9.party}</td>
                                <td>{(governor.candidate9.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{governor.candidate10.name}</td>
                                <td>{governor.candidate10.party}</td>
                                <td>{(governor.candidate10.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{governor.candidate11.name}</td>
                                <td>{governor.candidate11.party}</td>
                                <td>{(governor.candidate11.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{governor.candidate12.name}</td>
                                <td>{governor.candidate12.party}</td>
                                <td>{(governor.candidate12.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{governor.candidate13.name}</td>
                                <td>{governor.candidate13.party}</td>
                                <td>{(governor.candidate13.votes).toLocaleString()}</td>
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