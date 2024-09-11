const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
console.log("sdfs");

let p = "TDRpu1z9vye0ZFcb";

const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
mongoose
  .connect(
    `mongodb+srv://karthikarun172:${password}@devcluster.8atgx.mongodb.net/?retryWrites=true&w=majority&appName=DevCluster`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to Database"))
  .catch((er) => console.log("could not connect", er));

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.get("/", (req, res) => {
  res.send("hello world!");
});

const port = 4000;

app.listen(port, () => {
  console.log(`Port listineing to ${port}`);
});
