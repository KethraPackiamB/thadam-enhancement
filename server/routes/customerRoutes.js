const express = require("express");
const router = express.Router();
const { deleteCustomer } = require("../controllers/customerController");
const customerController = require("../controllers/customerController");
const verifyToken = require("../middleware/authMiddleware");

const {
  getAllCustomers,
  getCustomerById,
} = require("../controllers/customerController");


// router.delete("/customers/:id", deleteCustomer);
router.get("/customers", verifyToken, getAllCustomers);
router.get("/customers/:id", verifyToken, getCustomerById);
// router.put("/customers/:id", customerController.updateCustomer);

module.exports = router;
