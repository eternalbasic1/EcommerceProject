// We generally use app.get or app.post, But we don't do that instead we use express router in this we use router.get or router.post

const express = require('express');
const router = express.Router();
const { check , validationResult } = require('express-validator');

const {signout,signup} = require("../controllers/auth");

router.post("/signup",[
    check("name","Name Should be atleast 3 characters").isLength({min:3}),
    check("email","Email is Required").isEmail(),
    check("password","Password should be atleast 3 char").isLength({min: 3}),
    ],
    signup
)


router.get("/signout" , signout)

module.exports = router;