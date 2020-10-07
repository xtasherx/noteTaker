const express = require("express");
const fs = require("fs");
const app = express();
var PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiRoutes")(app, fs);
require("./routes/htmlRoutes")(app, fs);

app.listen(PORT, () => {
  console.log(`App is listening on localhost: ${PORT}`);
});
