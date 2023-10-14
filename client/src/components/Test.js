import React, { useEffect, useState } from 'react';

function Test() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch('/api/actors')
      .then((response) => response.json())
      .then((data) => {
        setActors(data.actors);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const thStyle = {
    padding: '15px',
    textAlign: 'left',
    backgroundColor: '#007BFF',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderBottom: '2px solid #dee2e6',
  };

  const tdStyle = {
    padding: '15px',
    textAlign: 'left',
    borderBottom: '1px solid #dee2e6',
  };

  const evenRowStyle = {
    backgroundColor: '#f2f2f2',
  };

  return (
    <div>
      <h1 style={thStyle}>List of Actors: </h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>First Name</th>
            <th style={thStyle}>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {actors.map((actor) => (
            <tr
              key={actor.actor_id}
              style={actor.actor_id % 2 === 0 ? evenRowStyle : null}
            >
              <td style={tdStyle}>{actor.actor_id}</td>
              <td style={tdStyle}>{actor.first_name}</td>
              <td style={tdStyle}>{actor.last_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Test;
