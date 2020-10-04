const express = require("express");

const app = express();
var PORT = process.env.PORT || 5000;

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
  console.log(`App is listening on localhost: ${PORT}`);
});
