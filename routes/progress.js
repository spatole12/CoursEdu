const express = require('express');
const router = express.Router();
const data = require("../data");
const userData = data.userData;

router.get("/",async (req,res)=>{
    if(req.cookies.AuthCookie == "authenticated"){
        if(!req.cookies.userId){
            res.status(403).render("login",{error: "Please login first!"});
        } else {
            try {
                const getUser = await userData.getUserById(req.cookies.userId);
                const userProgress = {
                    javaProgress:getUser.javaProgress,
                    javaScriptProgress:getUser.javaScriptProgress,
                    pythonProgress:getUser.pythonProgress,
                    cPlusProgress:getUser.cPlusProgress,
                    javaQuiz:getUser.javaQuiz,
                    javaScriptQuiz:getUser.javaScriptQuiz,
                    pythonQuiz:getUser.pythonQuiz,
                    cPlusQuiz:getUser.cPlusQuiz
                }
                res.json(userProgress);
            } catch (e) {
                res.status(500).json({ error: e });
            }
        }
    } else{
        res.status(403).render("login",{error: "Please login first!"});
    }

});

module.exports = router;