const express = require("express");
const router = express.Router();

const { deleteCustomer } = require("../controllers/customerController");

router.delete("/customers/:id", deleteCustomer);

module.exports = router;
