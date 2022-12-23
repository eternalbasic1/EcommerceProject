// We generally use app.get or app.post, But we don't do that instead we use express router in this we use router.get or router.post

const express = require('express')
const router = express.Router()

const {signout,signup} = require("../controllers/auth");

router.post("/signup",signup)


router.get("/signout" , signout)

module.exports = router;