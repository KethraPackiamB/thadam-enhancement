const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const customerRoutes = require("./routes/customerRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(() => console.log("DB Error"));

app.get("/", (req, res) => {
  res.send("Server Started");
});

// Base API URL
app.use("/api", customerRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});