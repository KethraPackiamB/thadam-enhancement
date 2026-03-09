const Customer = require("../models/customer");

exports.updateCustomer = async (req, res) => {
    try{
        const updatedCustomer = await Customer.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );

        if (!updatedCustomer) {
            return res.status(404).json({ message: "Customer not found" });
        }

        res.json(updatedCustomer);
    } catch(error){
        res.status(500).json({message: "error.message"})
    }
}