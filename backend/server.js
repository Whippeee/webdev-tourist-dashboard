const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tourists", require("./routes/tourist.routes"));

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
