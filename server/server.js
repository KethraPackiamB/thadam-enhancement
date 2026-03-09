<<<<<<< HEAD
const express = require("express")
const cors=require('cors')
const app = express()
app.use(cors())
app.get('/', (req, res) =>{
    res.send("Server Started")
})

app.listen(5000, () =>{
    console.log("Server is running")
})
=======
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./Routes/customerRoutes");
require("dotenv").config();

const app = express();

app.use(cors())
app.use(express.json());
app.use("/api", router);

mongoose.connect(process.env.DB_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(() => console.log("DB Error"));

app.get("/", (req, res) => {
  res.send("Server Started");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
>>>>>>> f94793a80307a0d8289a1cdbd2d44488269b1eea
