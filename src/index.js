const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const router = require("../routes/index");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

let db = mongoose.connection;
db.on("error", console.error);
db.once("open", function () {
  console.log("Connected to mongod server");
});

mongoose
  .connect(
    "mongodb+srv://daehee:ldh642@cluster0.gvc4d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB connected..."))
  .catch(error => console.log(error));

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user", router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
