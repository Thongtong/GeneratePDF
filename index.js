const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const port = 3000;
const homeRoutes = require("./routes/home-routes");

const app = express();
app.use(expressLayouts);
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(homeRoutes.routes);

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
