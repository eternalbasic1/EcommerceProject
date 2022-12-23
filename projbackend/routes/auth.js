// We generally use app.get or app.post, But we don't do that instead we use express router in this we use router.get or router.post

const express = require('express')
const router = express.Router()

router.get("/signout" , (req,res) => {
    res.send("User Signout");
})

module.exports = router;