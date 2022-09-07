import React from 'react'
import { mp } from '../../Data/Mps'
import './cards.css'

function MP() {
    return (
        <>
            <h1>2022 National Assembly Race</h1>
            <div className='cards'>
                {mp.map((mp) => (

                    <div className='card'>
                        <caption>{mp.county} County</caption>
                        <tbody>
                            <tr>
                                <td>Candidate Names</td>
                                <td>Party</td>
                                <td>Votes</td>
                            </tr>
                            <hr />
                        </tbody>
                    </div>

                ))
                }

            </div>
        </>
    )
}

export default MP