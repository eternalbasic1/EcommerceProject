const Product = require("../models/product");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

exports.getProductById = (req,res,next,id) => {
    Product.findById(id)
    .populate("category")
    .exec((err,product)=> {
        if(err){
            return res.status(400).json({
                error: "Product not found"
            });
        }
        req.product = product;
        next();
    });
};


exports.createProduct = (req,res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req,(err,fields, file) => {
        if(err){
            return res.status(400).json({
                error: "Problem with Image"
            });
        }
        //destructure the fields
        const {name , description, price, category, stock} = fields;  
        
        if(
           !name ||
           !description || 
           !price ||
           !category || 
           !stock
        ){
            return res.status(400).json({
                error: "Please Include all feilds"
            })
        }

        let product = new Product(fields);

        //handle file here
        if(file.photo){
            if(file.photo.size > 3000000){
                return res.status(400).json({
                    error: "File size is too big!"
                });
            }
            if(product.photo){
            product.photo.data = fs.readFileSync(file.photo.filepath);
            product.photo.contentType = file.photo.mimetype;
        }
        // if(!product.photo){
        //     console.log("No product.photo");
        // }
    }

        //console.log(product);


        product.save((err,product) => {
            if(err){
                return res.status(400).json({
                    error: "Saving tshirt in DB failed"
                });
            }
            res.json(product);
        });
    });

};