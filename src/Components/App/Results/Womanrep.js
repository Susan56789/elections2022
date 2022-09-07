import React from 'react'
import { womanrep } from '../../Data/WomanRep'
import './cards.css'

function Womanrep() {
    return (
        <div className='cards'>
            {womanrep.map((womanrep) => (
                <div className='card'>
                    <caption>{womanrep.county} County</caption>
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
    )
}

export default Womanrep