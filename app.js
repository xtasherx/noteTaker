// ## Acceptance Criteria

//     Application should allow users to create and save notes.

//     Application should allow users to view previously saved notes.

//     Application should allow users to delete previously saved notes.

const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = 5000;
// The following HTML routes should be created:

// GET `/notes` - Should return the `notes.html` file.
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);
// GET `*` - Should return the `index.html` file
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// The application should have a `db.json` file on the backend that will be used to store
//  and retrieve notes using the `fs` module.

// The following API routes should be created:

// * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
app.get("/api/notes", (req, res) => {
  res.send("Welcome to the Star Wars Page!");
});

// * POST `/api/notes` - Should receive a new note to save on the request body, add it to the
// `db.json` file, and then return the new note to the client.
app.post("/api/notes", (req, res) => {
  res.send("Welcome to the Star Wars Page!");
});

// * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to
// delete. This means you'll need to find a way to give each note a unique `id` when it's saved.
// In order to delete a note, you'll need to read all notes from the `db.json` file,
// remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
app.delete("/api/notes/:id", (req, res) => {});
app.listen(PORT, () => {
  console.log(`App is listening on localhost: ${PORT}`);
});
