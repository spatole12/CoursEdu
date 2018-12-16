const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.clearCookie('AuthCookie');
    res.clearCookie('userId');
    // res.clearCookie('userData');
    res.redirect("/login");
});

module.exports = router;