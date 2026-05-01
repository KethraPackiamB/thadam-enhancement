const Customer = require("../models/customer");
const mongoose = require("mongoose");

const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const cleanFilterOptions = (values) =>
  [...new Set(values
    .filter(Boolean)
    .map((value) => value.trim())
    .filter(Boolean))]
    .sort((a, b) => a.localeCompare(b));

const normalizeCustomerPayload = (data) => ({
  ...data,
  contactType: data.contactType?.trim() || "Prospect",
});

const getAllCustomers = async (req, res) => {
  try {
    const filter = { createdBy: req.userId };

    if (req.query.search) {
      filter.$or = [
        { firstname: { $regex: req.query.search, $options: "i" } },
        { lastname: { $regex: req.query.search, $options: "i" } },
        { primaryEmail: { $regex: req.query.search, $options: "i" } },
      ];
    }
    if (req.query.location) {
      filter["address.city"] = { $regex: req.query.location, $options: "i" };
    }
    if (req.query.contactType) {
      filter["contactType"] = {
        $regex: `^${escapeRegex(req.query.contactType.trim())}$`,
        $options: "i",
      };
    }
    if (req.query.designation) {
      filter["designation"] = { $regex: req.query.designation, $options: "i" };
    }

    const customers = await Customer.find(filter);
    // const customers = await Customer.find({ createdBy: req.userId });
    res.json({
      success: true,
      message: "got customers data",
      data: customers,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "server error",
      error: err.message,
    });
  }
};

const getCustomerFilter = async (req, res) => {
  try {
    const locations = cleanFilterOptions(await Customer.distinct("address.city", {
      createdBy: req.userId,
    }));

    const contactTypes = cleanFilterOptions(await Customer.distinct("contactType", {
      createdBy: req.userId,
    }));

    const designations = cleanFilterOptions(await Customer.distinct("designation", {
      createdBy: req.userId,
    }));

    res.json({
      success: true,
      data: {
        locations,
        contactTypes,
        designations,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findOne({
      _id: req.params.id,
      createdBy: req.userId,
    });
    if (!customer) {
      return res.status(404).json({
        success: false,
        message: "Customer not found!",
      });
    }
    res.status(200).json({
      success: true,
      data: [customer],
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};

// module.exports = {getAllCustomers, getCustomerById};

const deleteCustomer = async (req, res) => {
  try {
    const id = req.params.id;
    const userId = req.userId;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Customer ID is required",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Customer ID",
      });
    }

    const deletedCustomer = await Customer.findOneAndDelete({
      _id: id,
      createdBy: userId,
    });

    if (!deletedCustomer) {
      return res.status(404).json({
        success: false,
        message: "Customer not found or you are not authorized",
      });
    }

    res.status(200).json({
      success: true,
      message: "Customer deleted successfully",
      data: deletedCustomer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

const updateCustomer = async (req, res) => {
  try {
    const customerData = normalizeCustomerPayload(req.body);
    const updatedCustomer = await Customer.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.userId },
      customerData,
      { returnDocument: "after" },
    );
    // console.log(req.body)
    if (!updatedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    res.json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Add Customer API
const addCustomer = async (req, res) => {
  console.log(req.user);
  try {
    const customerData = normalizeCustomerPayload(req.body);
    const { firstname, primaryEmail, primaryContactNo } = customerData;
    if (!firstname || !primaryEmail || !primaryContactNo) {
      return res.status(400).json({
        success: false,
        status: "error",
        message: "Required fields is missing",
      });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(primaryEmail)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(primaryContactNo)) {
      return res.status(400).json({
        success: false,
        message: "Invalid phone number",
      });
    }
    const existingCustomer = await Customer.findOne({ primaryEmail });
    if (existingCustomer) {
      return res.status(400).json({
        success: false,
        status: "error",
        message: "Customer with this email is already exists",
      });
    }
    const newCustomer = new Customer({
      ...customerData,
      createdBy: req.userId,
    });
    const savedCustomer = await newCustomer.save();
    res.status(201).json({
      success: true,
      status: "success",
      message: "Customer created successfully",
      data: savedCustomer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      status: "error",
      message: "Server error",
      error: error.message,
    });
  }
};
module.exports = {
  getAllCustomers,
  getCustomerById,
  addCustomer,
  deleteCustomer,
  updateCustomer,
  getCustomerFilter,
};
