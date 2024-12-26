const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const db = new sqlite3.Database("./database.sqlite");

app.use(bodyParser.json());
app.use(express.static("public"));

// Create tables
db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, password TEXT, role TEXT)"
  );
  db.run(
    "CREATE TABLE IF NOT EXISTS recipes (id INTEGER PRIMARY KEY, title TEXT, description TEXT, photo TEXT)"
  );
});

// User registration
app.post("/api/register", (req, res) => {
  const { username, password, role } = req.body;
  db.run(
    "INSERT INTO users (username, password, role) VALUES (?, ?, ?)",
    [username, password, role],
    (err) => {
      if (err) return res.json({ success: false });
      res.json({ success: true });
    }
  );
});

// User login
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  db.get(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, user) => {
      if (err || !user) return res.json({ success: false });
      res.json({
        success: true,
        redirect: user.role === "admin" ? "/views/admin-dashboard.html" : "/views/user-dashboard.html",
      });
    }
  );
});

// CRUD for recipes (Admin only)
app.get("/api/recipes", (req, res) => {
  db.all("SELECT * FROM recipes", (err, rows) => {
    res.json(rows);
  });
});

app.post("/api/recipes", (req, res) => {
  const { title, description, photo } = req.body;
  db.run(
    "INSERT INTO recipes (title, description, photo) VALUES (?, ?, ?)",
    [title, description, photo],
    (err) => {
      if (err) return res.json({ success: false });
      res.json({ success: true });
    }
  );
});

app.delete("/api/recipes/:id", (req, res) => {
  db.run("DELETE FROM recipes WHERE id = ?", req.params.id, (err) => {
    if (err) return res.json({ success: false });
    res.json({ success: true });
  });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
