import React from 'react'
import { womanrep } from '../../Data/WomanRep'
import './cards.css'

function Womanrep() {

    return (
        <>
            <h1>2022 Women Representative's Race</h1>
            <div className='cards'>
                {womanrep.map((womanrep) => (
                    <div className='card'>
                        <caption>{womanrep.county} County</caption>
                        <tr>

                            <td>
                                <small>
                                    Total Votes: {(womanrep.candidate1.votes + womanrep.candidate2.votes +
                                        womanrep.candidate3.votes + womanrep.candidate4.votes + womanrep.candidate5.votes
                                        + womanrep.candidate6.votes + womanrep.candidate7.votes + womanrep.candidate8.votes
                                        + womanrep.candidate9.votes + womanrep.candidate10.votes + womanrep.candidate11.votes
                                        + womanrep.candidate12.votes + womanrep.candidate13.votes + womanrep.candidate14.votes).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                </small>
                            </td>
                        </tr>
                        <tbody>
                            <tr>
                                <td>Candidate Names</td>
                                <td>Party</td>
                                <td>Votes</td>
                            </tr>
                            <div className='border' id='border'></div>
                            <tr className='item-row'>
                                <td>{womanrep.candidate1.name}</td>
                                <td>{womanrep.candidate1.party}</td>
                                <td>{(womanrep.candidate1.votes).toLocaleString()}</td>

                            </tr>
                            <tr className='item-row'>
                                <td>{womanrep.candidate2.name}</td>
                                <td>{womanrep.candidate2.party}</td>
                                <td>{(womanrep.candidate2.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{womanrep.candidate3.name}</td>
                                <td>{womanrep.candidate3.party}</td>
                                <td>{(womanrep.candidate3.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{womanrep.candidate4.name}</td>
                                <td>{womanrep.candidate4.party}</td>
                                <td>{(womanrep.candidate4.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{womanrep.candidate5.name}</td>
                                <td>{womanrep.candidate5.party}</td>
                                <td>{(womanrep.candidate5.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{womanrep.candidate6.name}</td>
                                <td>{womanrep.candidate6.party}</td>
                                <td>{(womanrep.candidate6.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{womanrep.candidate7.name}</td>
                                <td>{womanrep.candidate7.party}</td>
                                <td>{(womanrep.candidate7.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{womanrep.candidate8.name}</td>
                                <td>{womanrep.candidate8.party}</td>
                                <td>{(womanrep.candidate8.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{womanrep.candidate9.name}</td>
                                <td>{womanrep.candidate9.party}</td>
                                <td>{(womanrep.candidate9.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{womanrep.candidate10.name}</td>
                                <td>{womanrep.candidate10.party}</td>
                                <td>{(womanrep.candidate10.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{womanrep.candidate11.name}</td>
                                <td>{womanrep.candidate11.party}</td>
                                <td>{(womanrep.candidate11.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{womanrep.candidate12.name}</td>
                                <td>{womanrep.candidate12.party}</td>
                                <td>{(womanrep.candidate12.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{womanrep.candidate13.name}</td>
                                <td>{womanrep.candidate13.party}</td>
                                <td>{(womanrep.candidate13.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{womanrep.candidate14.name}</td>
                                <td>{womanrep.candidate14.party}</td>
                                <td>{(womanrep.candidate14.votes).toLocaleString()}</td>
                            </tr>
                        </tbody>
                    </div>
                ))
                }
            </div>
        </>
    )
}

export default Womanrep