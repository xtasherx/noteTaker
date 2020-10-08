// The application should have a `db.json` file on the backend that will be used to store
//  and retrieve notes using the `fs` module.

const { parse } = require("path");

module.exports = function (app, fs) {
  const jsonData = "./db/db.json";
  // * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
  app.get("/api/notes", (req, res) => {
    fs.readFile(jsonData, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      res.send(JSON.parse(data));
    });
  });
  // * POST `/api/notes` - Should receive a new note to save on the request body, add it to the
  // `db.json` file, and then return the new note to the client.
  app.post("/api/notes", (req, res) => {
    fs.readFile(jsonData, "utf8", (err, data) => {
      let parsedJson = JSON.parse(data);
      let newNote = req.body;
      newNote.id = `${Object.keys(parsedJson).length + 1}`;
      data = parsedJson;
      parsedJson.push(newNote);

      fs.writeFile(jsonData, JSON.stringify(data), "utf8", (err) => {
        res.send("added new data");
      });
    });
  });
  // * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to
  // delete. This means you'll need to find a way to give each note a unique `id` when it's saved.
  // In order to delete a note, you'll need to read all notes from the `db.json` file,
  // remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
  app.delete("/api/notes/:id", (req, res) => {
    fs.readFile(jsonData, "utf8", (err, data) => {
      let parsedJson = JSON.parse(data);
      const noteId = req.params["id"];
      let newArr = parsedJson.filter((note) => {
        return note.id !== noteId;
      });
      data = newArr;
      fs.writeFile(jsonData, JSON.stringify(data), "utf8", (err) => {
        res.send("removed");
      });
    });
  });
};
