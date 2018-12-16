const express = require('express');
const router = express.Router();
const data = require("../data");
const userData = data.userData;
const xss = require("xss");

router.get("/",(req,res)=>{
    if(req.cookies.AuthCookie == "authenticated"){
        res.render("homePage",{});
    }else{
        res.status(403).render("login",{error: "Please login first!"});
    }
    // res.render("homePage",{});
});

router.post('/', async (req,res)=>{
    let userAnswerData = req.body;

    if ("JavaScriptQuiz" in userAnswerData) {
        let sum = 0;
        if(userAnswerData.user_test1 == "1") {
            sum = sum + 1;
        }

        if(userAnswerData.user_test2 == "4") {
            sum = sum + 1;
        }

        if(userAnswerData.user_test3 == "2") {
            sum = sum + 1;
        }

        if(userAnswerData.user_test4 == "2") {
            sum = sum + 1;
        }

        if(userAnswerData.checkbox_test11 == "on" && userAnswerData.checkbox_test12 == "on" && userAnswerData.checkbox_test13 == "on") {
            sum = sum + 1;
        }

        if(userAnswerData.user_test5 == "3") {
            sum = sum + 1;
        }

        if(!req.cookies.userId){
            res.status(403).render("login",{error: "Please login first!"});
        } else {
            try {
                const newUserScore = await userData.updateJSQuizScore(req.cookies.userId, parseFloat(((sum / 6) * 100).toFixed(1)));
                const newUserProgress = await userData.updateJSProgress(req.cookies.userId, ((8 / 8) * 100));
            
                if(req.cookies.AuthCookie == "authenticated"){
                    res.render("homePage",{});
                }else{
                    res.status(403).render("login",{error: "Please login first!"});
                }
            } catch (e) {
                res.status(500).json({ error: e });
            }
        }
    }
    else if ("PythonQuiz" in userAnswerData) {
        let sum = 0;
        if(userAnswerData.user_test1 == "4") {
            sum = sum + 1;
        }

        if(userAnswerData.user_test2 == "4") {
            sum = sum + 1;
        }

        if(userAnswerData.user_test3 == "1") {
            sum = sum + 1;
        }

        if(userAnswerData.user_test4 == "3") {
            sum = sum + 1;
        }

        if(userAnswerData.checkbox_test11 == "on" && userAnswerData.checkbox_test12 == "on" && userAnswerData.checkbox_test14 == "on") {
            sum = sum + 1;
        }

        if(!req.cookies.userId){
            res.status(403).render("login",{error: "Please login first!"});
        } else {
            try {
                const newUserScore = await userData.updatePythonQuizScore(req.cookies.userId, ((sum / 5) * 100));
                const newUserProgress = await userData.updatePythonProgress(req.cookies.userId, ((8 / 8) * 100));
            
                if(req.cookies.AuthCookie == "authenticated"){
                    res.render("homePage",{});
                }else{
                    res.status(403).render("login",{error: "Please login first!"});
                }
            } catch (e) {
                res.status(500).json({ error: e });
            }
        }
    }
    else if ("JavaQuiz" in userAnswerData) {
        let sum = 0;
        if(userAnswerData.user_test1 == "4") {
            sum = sum + 1;
        }

        if(userAnswerData.user_test2 == "1") {
            sum = sum + 1;
        }

        if(userAnswerData.user_test3 == "2") {
            sum = sum + 1;
        }

        if(userAnswerData.user_test4 == "4") {
            sum = sum + 1;
        }

        if(userAnswerData.checkbox_test11 == "on" && userAnswerData.checkbox_test12 == "on" && userAnswerData.checkbox_test13 == "on") {
            sum = sum + 1;
        }

        if(!req.cookies.userId){
            res.status(403).render("login",{error: "Please login first!"});
        } else {
            try {
                const newUserScore = await userData.updateJavaQuizScore(req.cookies.userId, ((sum / 5) * 100));
                const newUserProgress = await userData.updateJavaProgress(req.cookies.userId, ((4 / 4) * 100));
            
                if(req.cookies.AuthCookie == "authenticated"){
                    res.render("homePage",{});
                }else{
                    res.status(403).render("login",{error: "Please login first!"});
                }
            } catch (e) {
                res.status(500).json({ error: e });
            }
        }
    }
    else if ("cPlusQuiz" in userAnswerData) {
        let sum = 0;
        if(userAnswerData.user_test1 == "1") {
            sum = sum + 1;
        }

        if(userAnswerData.user_test2 == "2") {
            sum = sum + 1;
        }

        if(userAnswerData.checkbox_test11 == "on" && userAnswerData.checkbox_test12 == "on") {
            sum = sum + 1;
        }

        if(userAnswerData.user_test4 == "4") {
            sum = sum + 1;
        }

        if(userAnswerData.user_test5 == "3") {
            sum = sum + 1;
        }

        if(!req.cookies.userId){
            res.status(403).render("login",{error: "Please login first!"});
        } else {
            try {
                const newUserScore = await userData.updatecPlusQuizScore(req.cookies.userId, ((sum / 5) * 100));
                const newUserProgress = await userData.updatecPlusProgress(req.cookies.userId, ((4 / 4) * 100));
            
                if(req.cookies.AuthCookie == "authenticated"){
                    res.render("homePage",{});
                }else{
                    res.status(403).render("login",{error: "Please login first!"});
                }
            } catch (e) {
                res.status(500).json({ error: e });
            }
        }
    }
    else {
        console.log("Shouldn't be here");
        if(req.cookies.AuthCookie == "authenticated") {
            res.render("homePage",{});
        }else {
            res.status(403).render("login",{error: "Please login first!"});
        }
    }
});

// router.post('/',(req,res)=>{
//     let getEmail = req.body.emailName;
//     let getPassWord = req.body.passWord;
//     // res.send(getEmail);
//     if(getEmail && getPassWord){
//         res.redirect();
//     }
// })

module.exports = router;