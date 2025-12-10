// server.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Database file (in backend folder)
const DB_PATH = path.join(__dirname, 'students.db');

const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error('Failed to open DB:', err.message);
    process.exit(1);
  }
  console.log('Connected to SQLite DB at', DB_PATH);
});

// Create table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS students (
  roll INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  course TEXT NOT NULL
)`);

// --- REST API ---

// GET /students -> list all
app.get('/students', (req, res) => {
  db.all('SELECT * FROM students ORDER BY roll', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// GET /students/:roll -> get one student
app.get('/students/:roll', (req, res) => {
  const roll = parseInt(req.params.roll);
  db.get('SELECT * FROM students WHERE roll = ?', [roll], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: 'Not found' });
    res.json(row);
  });
});

// POST /students -> add student
app.post('/students', (req, res) => {
  const { roll, name, course } = req.body;
  if (!roll || !name || !course) return res.status(400).json({ error: 'Missing fields' });

  db.run('INSERT INTO students(roll, name, course) VALUES(?,?,?)',
    [roll, name, course],
    function (err) {
      if (err) {
        if (err.message && err.message.includes('UNIQUE constraint')) {
          return res.status(409).json({ error: 'Roll number already exists' });
        }
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ roll, name, course });
    });
});

// DELETE /students/:roll -> delete student
app.delete('/students/:roll', (req, res) => {
  const roll = parseInt(req.params.roll);
  db.run('DELETE FROM students WHERE roll = ?', [roll], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Not found' });
    res.json({ deleted: roll });
  });
});

// PUT /students/:roll -> update student
app.put('/students/:roll', (req, res) => {
  const roll = parseInt(req.params.roll);
  const { name, course } = req.body;

  if (!name || !course) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  db.run(
    'UPDATE students SET name = ?, course = ? WHERE roll = ?',
    [name, course, roll],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      if (this.changes === 0) return res.status(404).json({ error: 'Student not found' });

      res.json({ updated: roll, name, course });
    }
  );
});


// Optional: health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
