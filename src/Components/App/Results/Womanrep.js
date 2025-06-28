
import { womanrep } from '../../Data/WomanRep';
import './cards.css';

function Womanrep() {
    // Helper function to calculate total votes
    const calculateTotalVotes = (countyData) => {
        return Object.values(countyData)
            .filter(item => typeof item === 'object' && item.votes)
            .reduce((total, candidate) => total + candidate.votes, 0);
    };

    // Helper function to get all candidates from a county
    const getCandidates = (countyData) => {
        return Object.values(countyData)
            .filter(item => typeof item === 'object' && item.name && item.party && typeof item.votes === 'number')
            .sort((a, b) => b.votes - a.votes); // Sort by votes descending
    };

    return (
        <>
            <h1>2022 Women Representative's Race</h1>
            <div className='cards'>
                {womanrep.map((countyData, index) => {
                    const candidates = getCandidates(countyData);
                    const totalVotes = calculateTotalVotes(countyData);

                    return (
                        <div key={index} className='card'>
                            <caption>{countyData.county} County</caption>
                            
                            <div className='total-votes'>
                                <small>
                                    Total Votes: {totalVotes.toLocaleString()}
                                </small>
                            </div>

                            <div className='table-wrapper'>
                                <table className='results-table'>
                                    <thead>
                                        <tr>
                                            <th>Candidate Names</th>
                                            <th>Party</th>
                                            <th>Votes</th>
                                        </tr>
                                    </thead>
                                    <div className='border' id='border'></div>
                                    <tbody className='data'>
                                        {candidates.map((candidate, candidateIndex) => (
                                            <tr key={candidateIndex} className='item-row'>
                                                <td className='candidate-name'>{candidate.name}</td>
                                                <td className='party'>{candidate.party}</td>
                                                <td className='votes'>{candidate.votes.toLocaleString()}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Womanrep;