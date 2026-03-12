const Customer = require("../models/customer");
const mongoose = require("mongoose");


const getAllCustomers = async(req, res) => {
 
    try{
const customers = await Customer.find({});
    res.json({
        success : true,
        message : "got customers data",
        data : customers
    })
} catch(err){
    res.json({
        success : false,
        message : "server error",
        error : err.message
    })
}
}
 
const getCustomerById = async(req, res) => {
 
    try{
         const customer = await customer.findById(req.params.id);
        if(!customer){
            return res.status(404).json({
                success : false,
                message : "Customer not found!"
            });
        }
        res.status(200).json({
            success : true,
            data : customer
        });
    }
    catch(err){
        res.json({
            success : false,
            message : "Server Error",
            error : err.message
        })
    }
}
 
module.exports = {getAllCustomers, getCustomerById};

exports.deleteCustomer = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        success: false,
        status: "error",
        message: "Customer ID is required",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        status: "error",
        message: "Invalid Customer ID",
      });
    }

    const deletedCustomer = await Customer.findByIdAndDelete(id);

    if (!deletedCustomer) {
      return res.status(404).json({
        success: false,
        status: "error",
        message: "Customer not found",
      });
    }

    res.status(200).json({
      success: true,
      status: "success",
      message: "Customer deleted successfully",
      data: deletedCustomer,
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

exports.updateCustomer = async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );

    if (!updatedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    res.json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ message: "error.message" });
  }
};
