const customer = require("../models/customer");
 
const getAllCustomers = async(req, res) => {
 
    try{
const customers = await customer.find({});
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
         const customer = await customer.findById(req.param.id);
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
 
