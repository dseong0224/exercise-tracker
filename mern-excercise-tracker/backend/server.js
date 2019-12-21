const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI;
const uri = 'mongodb+srv://dseong0224:ippendorf95@cluster0-pptr1.mongodb.net/test?retryWrites=true&w=majority'

mongoose.Promise = global.Promise

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB server connect"))
  .catch(e => console.log("DB error", e));
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
  console.log(`server is up and running on port ${port}`);
});
