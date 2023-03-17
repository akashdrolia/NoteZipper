const express = require("express");
const notes = require("./Data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();
dotenv.config();
connectDB();

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

const PORT = process.env.PORT || 5000;

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);

  res.send(note);
});

app.listen(PORT, console.log(`server started listening at port ${PORT}`));
