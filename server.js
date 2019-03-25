const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const port = process.env.PORT || 5000;
const db = require("./config/keys").mongoURI;
const app = express();

require("./config/passport")(passport);

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(bodyParser.json());
app.use("/api/users", users);

app.listen(port, () =>
  console.log(`Server up and running on port ${port} !`));
