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

export default Senator