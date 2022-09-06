import React from 'react'
import './total.css'
import { party } from '../Data/Party'
import { president } from '../Data/President'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';


function Total() {

    //candidate1
    let total1 = 0;
    for (var i = 0; i < president.length; i++) {
        total1 += president[i].candidate1.votes;
    }
    console.log('total', total1)
    let name1 = president[0].candidate1.name;
    console.log('name', name1)
    let party1 = president[0].candidate1.party;
    console.log('party', party1)
    let img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn8EtPfv-PTjhmMj5AmPgSVqNbEqV78WIp9w&usqp=CAU"
    //candidate2
    let total2 = 0;
    for (var j = 0; j < president.length; j++) {
        total2 += president[j].candidate2.votes;
    }
    console.log('total', total2)
    let name2 = president[0].candidate2.name;
    console.log('name', name2)
    let party2 = president[0].candidate2.party;
    console.log('party', party2)
    let img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR22xtZQNFF4WJ5aECl4BodclmB2Viac43uA&usqp=CAU"
    //candidate3
    let total3 = 0;
    for (var k = 0; k < president.length; k++) {
        total3 += president[k].candidate3.votes;
    }
    console.log('total', total3)
    let name3 = president[0].candidate3.name;
    console.log('name', name3)
    let party3 = president[0].candidate3.party;
    console.log('party', party3)
    let img3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGU2fD-4hbav7aLSBOqd-O3zW4mLlm9g_xNw&usqp=CAU"
    //candidate4
    let total4 = 0;
    for (var m = 0; m < president.length; m++) {
        total4 += president[m].candidate4.votes;
    }
    console.log('total', total4)
    let name4 = president[0].candidate4.name;
    console.log('name', name4)
    let party4 = president[0].candidate4.party;
    console.log('party', party4)
    let img4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm_aSBmqw83wkR-r-w63t1RrnGUJPI3Q8bSg&usqp=CAU"
    //total votes   
    let total = total1 + total2 + total3 + total3
    console.log('Total Votes', total)

    const dat = [

        {
            name: name1,
            votes: total1,
            party: party1,



        }, {
            name: name2,
            votes: total2,
            party: party2,


        }, {
            name: name3,
            votes: total3,
            party: party3,

        },
        {
            name: name4,
            votes: total4,
            party: party4,

        }


    ]


    return (
        <>
            <div className="card">
                <tr>
                    <td>
                        <img src={img1} alt="William Ruto" />
                    </td>
                    <td>{name1}</td>
                    <td>{party1}</td>
                    <td>{(total1).toLocaleString()}</td>
                    <td>{(total1 / total) * 100}%</td>
                </tr>
                <tr>
                    <td>
                        <img src={img2} alt="Raila Odinga" />
                    </td>
                    <td>{name2}</td>
                    <td>{party2}</td>
                    <td>{(total2).toLocaleString()}</td>
                    <td>{(total2 / total) * 100}%</td>
                </tr>
                <tr>
                    <td>
                        <img src={img3} alt="George Wajackoyah" />
                    </td>
                    <td>{name3}</td>
                    <td>{party3}</td>
                    <td>{(total3).toLocaleString()}</td>
                    <td>{(total3 / total) * 100}%</td>
                </tr>
                <tr>
                    <td>
                        <img src={img4} alt="David Waihiga" />
                    </td>
                    <td>{name4}</td>
                    <td>{party4}</td>
                    <td>{(total4).toLocaleString()}</td>
                    <td>{(total4 / total) * 100}%</td>
                </tr><br />
                <tr>
                    <p>Total votes: {(total).toLocaleString()}</p>
                </tr>
            </div><br />
            <div className="card">
                <BarChart width={730} height={250} data={dat}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="votes" fill='black' />
                </BarChart>
            </div>

        </>
    )
}

export default Total