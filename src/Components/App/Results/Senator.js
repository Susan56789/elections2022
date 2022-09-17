import React from 'react'
import { senator } from '../../Data/Senator'

function Senator() {
    return (
        <>
            <h1>2022 Senate Race</h1>
            <div className='cards'>
                {senator.map((senator) => (
                    <div className='card'>
                        <caption>{senator.county} County</caption>
                        <tr>
                            <td>
                                Total votes: {
                                    (senator.candidate1.votes + senator.candidate2.votes +
                                        senator.candidate3.votes + senator.candidate4.votes + senator.candidate5.votes
                                        + senator.candidate6.votes + senator.candidate7.votes + senator.candidate8.votes
                                        + senator.candidate9.votes + senator.candidate10.votes + senator.candidate11.votes
                                        + senator.candidate12.votes + senator.candidate13.votes + senator.candidate14.votes + senator.candidate15.votes).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                }
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
                                <td>{senator.candidate1.name}</td>
                                <td>{senator.candidate1.party}</td>
                                <td>{(senator.candidate1.votes).toLocaleString()}</td>

                            </tr>
                            <tr className='item-row'>
                                <td>{senator.candidate2.name}</td>
                                <td>{senator.candidate2.party}</td>
                                <td>{(senator.candidate2.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{senator.candidate3.name}</td>
                                <td>{senator.candidate3.party}</td>
                                <td>{(senator.candidate3.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{senator.candidate4.name}</td>
                                <td>{senator.candidate4.party}</td>
                                <td>{(senator.candidate4.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{senator.candidate5.name}</td>
                                <td>{senator.candidate5.party}</td>
                                <td>{(senator.candidate5.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{senator.candidate6.name}</td>
                                <td>{senator.candidate6.party}</td>
                                <td>{(senator.candidate6.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{senator.candidate7.name}</td>
                                <td>{senator.candidate7.party}</td>
                                <td>{(senator.candidate7.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{senator.candidate8.name}</td>
                                <td>{senator.candidate8.party}</td>
                                <td>{(senator.candidate8.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{senator.candidate9.name}</td>
                                <td>{senator.candidate9.party}</td>
                                <td>{(senator.candidate9.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{senator.candidate10.name}</td>
                                <td>{senator.candidate10.party}</td>
                                <td>{(senator.candidate10.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{senator.candidate11.name}</td>
                                <td>{senator.candidate11.party}</td>
                                <td>{(senator.candidate11.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{senator.candidate12.name}</td>
                                <td>{senator.candidate12.party}</td>
                                <td>{(senator.candidate12.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{senator.candidate13.name}</td>
                                <td>{senator.candidate13.party}</td>
                                <td>{(senator.candidate13.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{senator.candidate14.name}</td>
                                <td>{senator.candidate14.party}</td>
                                <td>{(senator.candidate14.votes).toLocaleString()}</td>
                            </tr>
                            <tr className='item-row'>
                                <td>{senator.candidate15.name}</td>
                                <td>{senator.candidate15.party}</td>
                                <td>{(senator.candidate15.votes).toLocaleString()}</td>
                            </tr>
                        </tbody>
                    </div>
                ))
                }
            </div>
        </>
    )
}

export default Senator