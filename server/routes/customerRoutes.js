const express = require("express");
const router = express.Router();

const { deleteCustomer } = require("../controllers/customerController");

router.delete("/customers/:id", deleteCustomer);

module.exports = router;
const customerController = require("../controllers/customerController");

router.put("/customers/:id", customerController.updateCustomer);

module.exports = router;
