const User = require("../models/user");
const { check , validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.signin = (req,res) => {
    const {email,password} = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array()[0].msg});
      }

      User.findOne({email}, (err,user) => {
        if(err || !user){ // Intial we kept only if(err) but we need if(err || !user) keep in mind might be useful sometimes
            return res.status(400).json({
                error:"USER email does not exists"
            })
        }
        if(!user.authenticate(password)){
            return res.status(401).json({
                error: "Email and password is not correct"
            })
        }

        //CREATE TOKEN
        const token = jwt.sign({_id: user._id},process.env.SECRET);

        //PUT TOKEN IN COOKIE
        res.cookie("token",token,{expire : new Date() + 9999});

        //SEND RESPONSE TO FRONTEND
        const {_id,name,email,role} = user;
        return res.json({token,user:{_id,name,email,role}});

      })
    
}


exports.signup = (req,res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array()[0].msg});
      }

    const user = new User(req.body);
    user.save((err,user) => {
        if(err){
            return res.status(400).json({
                err: "NOT able to save user to DB"
            })
        }
        res.json({
            name: user.name,
            email: user.email,
            id: user._id
        });
    })
}


exports.signout = (req,res) => {
    res.json({
        message: "User Signout"
    });
}