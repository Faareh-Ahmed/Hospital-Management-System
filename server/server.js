const express = require('express');
const mysql = require('mysql2');


const app = express();


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'F.mysql786',
  database: 'sakila',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.get('/api/actors', (req, res) => {
    const sql = 'SELECT * FROM actor limit 10';
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error querying MySQL:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.json({ actors: results }); 
    });
  });
try {
    app.listen(5000, () => {
      console.log('Server started on port 5000');
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
