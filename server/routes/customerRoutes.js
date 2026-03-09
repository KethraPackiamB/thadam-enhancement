const express = require("express");
const router = express.Router();

const customerController = require("../controllers/customerController");

router.put("/customers/:id", customerController.updateCustomer);

module.exports = router;