const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");
const verifyToken = require("../middleware/authMiddleware");

const {
  getAllCustomers,
  getCustomerById,
  addCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customerController");

router.delete("/customers/:id", verifyToken, deleteCustomer);
router.get("/customers", verifyToken, getAllCustomers);
router.get("/customers/:id", verifyToken, getCustomerById);
router.put("/customers/:id", verifyToken, updateCustomer);
router.post("/customers", verifyToken, addCustomer);
module.exports = router;
