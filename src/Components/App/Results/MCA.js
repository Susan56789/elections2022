
import { mca } from '../../Data/MCA';
import './cards.css';

function MCA() {
    // Helper function to calculate total votes
    const calculateTotalVotes = (wardData) => {
        return Object.values(wardData)
            .filter(item => typeof item === 'object' && item.votes)
            .reduce((total, candidate) => total + candidate.votes, 0);
    };

    // Helper function to get all candidates from a ward
    const getCandidates = (wardData) => {
        return Object.values(wardData)
            .filter(item => typeof item === 'object' && item.name && item.party && typeof item.votes === 'number')
            .sort((a, b) => b.votes - a.votes); // Sort by votes descending
    };

    return (
        <>
            <h1>2022 MCA (Member of County Assembly) Race</h1>
            <div className='cards'>
                {mca.map((wardData, index) => {
                    const candidates = getCandidates(wardData);
                    const totalVotes = calculateTotalVotes(wardData);

                    return (
                        <div key={index} className='card'>
                            <caption>{wardData.ward || wardData.constituency || wardData.county} Ward</caption>
                            
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

export default MCA;