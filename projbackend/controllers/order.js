const {Order,ProductCart} = require("../models/order");

exports.getOrderById = (req,res,next,id) => {
    Order.findById(id)
    .populate("products.product","name price")
    .exec((err,order)=> {
        if(err){
            return res.status(400).json({
                error: "No order in DB"
            });
        }
        req.order = order;
         next();
    });
};


exports.createOrder = (req,res) => {
    console.log("Creating Order", req);
    req.body.order.user = req.profile;
    const order = new Order(req.body.order);
    order.save((err,order) => {
        if(err){
            return res.send(400).json({
                error : "Failed to save your order in DB"
            });
        }
        res.json(order);
    });
}


exports.getallOrders = (req,res) => {
    Order.find()
    .populate("user", "_id name")
    .exec((err,order) => {
        if(err){
            return res.status(400).json({
                error: " No orders found in DB"
            })
        }
        res.json(order);
    })
}


exports.getOrderStatus= (req,res) => {
    res.json(Order.status.path("status").enumValues)
}

exports.updateStatus = (req,res) => {
    Order.update(
        {_id: req.body.orderId},
        {$set: {status:req.body.status}},
        (err,order) => {
            if(err){
                return res.status(400).json({
                    error: "Cannot Update order Status"
                });
            }
            res.json(order);
        }
    );
}