import './total.css';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Cell, ResponsiveContainer } from 'recharts';
import { president } from '../Data/President';

function Total() {
  // Calculate totals for each candidate
  let total1 = 0;
  for (var i = 0; i < president.length; i++) {
    total1 += president[i].candidate1.votes;
  }
  
  let total2 = 0;
  for (var j = 0; j < president.length; j++) {
    total2 += president[j].candidate2.votes;
  }
  
  let total3 = 0;
  for (var k = 0; k < president.length; k++) {
    total3 += president[k].candidate3.votes;
  }
  
  let total4 = 0;
  for (var m = 0; m < president.length; m++) {
    total4 += president[m].candidate4.votes;
  }

  // Get candidate info
  const candidates = [
    {
      name: president[0].candidate1.name,
      party: president[0].candidate1.party,
      votes: total1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn8EtPfv-PTjhmMj5AmPgSVqNbEqV78WIp9w&usqp=CAU",
      color: "#FFD700"
    },
    {
      name: president[0].candidate2.name,
      party: president[0].candidate2.party,
      votes: total2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR22xtZQNFF4WJ5aECl4BodclmB2Viac43uA&usqp=CAU",
      color: "#4285F4"
    },
    {
      name: president[0].candidate3.name,
      party: president[0].candidate3.party,
      votes: total3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGU2fD-4hbav7aLSBOqd-O3zW4mLlm9g_xNw&usqp=CAU",
      color: "#34A853"
    },
    {
      name: president[0].candidate4.name,
      party: president[0].candidate4.party,
      votes: total4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm_aSBmqw83wkR-r-w63t1RrnGUJPI3Q8bSg&usqp=CAU",
      color: "#EA4335"
    }
  ];

  const totalVotes = total1 + total2 + total3 + total4;

  // Sort candidates by votes (highest first)
  const sortedCandidates = [...candidates].sort((a, b) => b.votes - a.votes);

  const getPercentage = (votes) => ((votes / totalVotes) * 100).toFixed(2);

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div className="card">
        <div className="desktop-table">
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f5f5f5' }}>
                <td style={{ fontWeight: 'bold', padding: '10px', textAlign: 'center' }}>Photo</td>
                <td style={{ fontWeight: 'bold', padding: '10px', textAlign: 'center' }}>Name</td>
                <td style={{ fontWeight: 'bold', padding: '10px', textAlign: 'center' }}>Party</td>
                <td style={{ fontWeight: 'bold', padding: '10px', textAlign: 'center' }}>Votes</td>
                <td style={{ fontWeight: 'bold', padding: '10px', textAlign: 'center' }}>Percentage</td>
              </tr>
            </thead>
            <tbody>
              {sortedCandidates.map((candidate, index) => (
                <tr key={candidate.name} style={{ 
                  backgroundColor: index % 2 === 0 ? '#fff' : '#f9f9f9',
                  borderBottom: '1px solid #eee'
                }}>
                  <td style={{ textAlign: 'center', padding: '10px' }}>
                    <img src={candidate.img} alt={candidate.name} />
                  </td>
                  <td style={{ textAlign: 'center', padding: '10px', fontWeight: 'bold' }}>
                    {candidate.name}
                  </td>
                  <td style={{ textAlign: 'center', padding: '10px' }}>
                    {candidate.party}
                  </td>
                  <td style={{ textAlign: 'center', padding: '10px', fontWeight: 'bold' }}>
                    {candidate.votes.toLocaleString()}
                  </td>
                  <td style={{ 
                    textAlign: 'center', 
                    padding: '10px', 
                    fontWeight: 'bold',
                    color: index === 0 ? '#28a745' : '#333'
                  }}>
                    {getPercentage(candidate.votes)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mobile-cards">
          {sortedCandidates.map((candidate, index) => (
            <div key={candidate.name} className="candidate-card" style={{
              backgroundColor: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: '20px',
              margin: '15px 0',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '10px',
                right: '15px',
                backgroundColor: index === 0 ? '#28a745' : index === 1 ? '#6c757d' : '#ffc107',
                color: index === 2 ? '#000' : '#fff',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '14px'
              }}>
                {index + 1}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <img 
                  src={candidate.img} 
                  alt={candidate.name}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    marginRight: '15px',
                    border: '3px solid #e0e0e0'
                  }}
                />
                <div>
                  <h3 style={{ 
                    margin: '0 0 5px 0', 
                    fontSize: '18px', 
                    fontWeight: 'bold',
                    color: '#333'
                  }}>
                    {candidate.name}
                  </h3>
                  <p style={{ 
                    margin: '0', 
                    color: '#666',
                    fontSize: '14px'
                  }}>
                    {candidate.party}
                  </p>
                </div>
              </div>

              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                backgroundColor: '#f8f9fa',
                padding: '15px',
                borderRadius: '6px'
              }}>
                <div style={{ textAlign: 'center', flex: 1 }}>
                  <div style={{ 
                    fontSize: '20px', 
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '5px'
                  }}>
                    {candidate.votes.toLocaleString()}
                  </div>
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    VOTES
                  </div>
                </div>
                <div style={{ textAlign: 'center', flex: 1 }}>
                  <div style={{ 
                    fontSize: '24px', 
                    fontWeight: 'bold',
                    color: index === 0 ? '#28a745' : '#333',
                    marginBottom: '5px'
                  }}>
                    {getPercentage(candidate.votes)}%
                  </div>
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    PERCENTAGE
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '15px' }}>
                <div style={{
                  width: '100%',
                  height: '8px',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${getPercentage(candidate.votes)}%`,
                    height: '100%',
                    backgroundColor: candidate.color,
                    transition: 'width 0.5s ease'
                  }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ 
          marginTop: '20px', 
          padding: '15px', 
          backgroundColor: '#f8f9fa', 
          borderRadius: '5px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'space-between'
        }}>
          <div>
            <p style={{ margin: '0', fontSize: '18px', fontWeight: 'bold' }}>
              Total votes tallied: {totalVotes.toLocaleString()}
            </p>
          </div>
          <div style={{ maxWidth: '400px' }}>
            <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
              <small>
                The winner of presidential elections needs 50% + 1 of the valid votes cast and at least 25% votes in more than 24 counties
              </small>
            </p>
          </div>
        </div>

        {getPercentage(sortedCandidates[0].votes) > 50 && (
          <div style={{
            marginTop: '15px',
            padding: '15px',
            backgroundColor: '#d4edda',
            border: '1px solid #c3e6cb',
            borderRadius: '5px',
            textAlign: 'center'
          }}>
            <h3 style={{ margin: '0 0 5px 0', color: '#155724' }}>
              🎉 Election Winner: {sortedCandidates[0].name}
            </h3>
            <p style={{ margin: '0', color: '#155724' }}>
              {sortedCandidates[0].party} • {getPercentage(sortedCandidates[0].votes)}% of votes
            </p>
          </div>
        )}
      </div>

      <br />

      <div className="card">
        <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '24px' }}>
          Vote Distribution Chart
        </h2>
        <div style={{ width: '100%', height: '400px', minHeight: '300px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={sortedCandidates} 
              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="name" 
                stroke="#374151"
                fontSize={12}
                angle={-45}
                textAnchor="end"
                height={80}
                interval={0}
              />
              <YAxis 
                stroke="#374151"
                fontSize={12}
                tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
              />
              <Bar 
                dataKey="votes" 
                radius={[4, 4, 0, 0]}
                stroke="#374151"
                strokeWidth={1}
              >
                {sortedCandidates.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <style jsx>{`
        .desktop-table {
          display: block;
        }
        
        .mobile-cards {
          display: none;
        }

        @media (max-width: 768px) {
          .desktop-table {
            display: none;
          }
          
          .mobile-cards {
            display: block;
          }
          
          .card {
            margin: 10px 0;
            padding: 10px;
          }
        }
        
        @media (max-width: 480px) {
          .candidate-card {
            padding: 15px !important;
            margin: 10px 0 !important;
          }
          
          .candidate-card img {
            width: 50px !important;
            height: 50px !important;
          }
          
          .candidate-card h3 {
            font-size: 16px !important;
          }
          
          .candidate-card div[style*="fontSize: '20px'"] {
            font-size: 18px !important;
          }
          
          .candidate-card div[style*="fontSize: '24px'"] {
            font-size: 20px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Total;