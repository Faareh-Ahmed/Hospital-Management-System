import React, { useEffect, useState } from 'react';

function Test() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch('/api/actors') // Endpoint to retrieve actors from the Express API
      .then((response) => response.json())
      .then((data) => {
        setActors(data.actors);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>List of Actors:</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {actors.map((actor) => (
            <tr key={actor.actor_id}>
              <td>{actor.actor_id}</td>
              <td>{actor.first_name}</td>
              <td>{actor.last_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Test;
