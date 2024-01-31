const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;
app.get("/", (req, res) => {
  res.send("sever đang chạy");
});
app.post("/signup", (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => console.log("sever đang chạy trên địa chỉ " + PORT));
