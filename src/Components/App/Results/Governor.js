import React from 'react'
import { governor } from '../../Data/Governor'
import './cards.css'

function Governor() {
    return (
        <>
            <h1>2022 Governor Race</h1>
            <div className='cards'>

                {governor.map((governor) => (

                    <div className='card'>
                        <caption>{governor.county} County</caption>
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

export default Governor