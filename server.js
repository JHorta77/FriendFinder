const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

require(path.join(__dirname, "/app/routing/apiRoutes"))(app);
require(path.join(__dirname, "/app/routing/htmlRoutes"))(app);

app.listen(PORT, function () {
    console.log('Friend Finder app is listening on PORT: ' + PORT);
});