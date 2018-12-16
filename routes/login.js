const express = require('express');
const router = express.Router();
const data = require("../data");
const usersInfo = data.users;
var passport = require('passport');
const userData = data.userData;
const bcrypt = require("bcryptjs");
const xss = require("xss");

router.get("/",(req,res)=>{
    if (req.cookies.AuthCookie == "authenticated") {
        res.redirect("/homePage");
    } else {
        res.status(403).render("login",{});
    }
    

});

router.post('/',async (req,res)=>{
    // let getEmail = req.body.inputEmailName;
    // let getPassWord = req.body.inputPassWord;
    // let allUsers = usersInfo.users;

    //     for(let i=0;i<allUsers.length;i++){
    //         var getUser = allUsers[i];
    //         if(getUser.email == getEmail){
    //             if(getUser.password == getPassWord){
    //                 res.redirect("/homePage");
    //                 return;
    //             }else{
    //                 res.status(403).render("login",{error:"Sry, you did not provide the valid password"});
    //                 return;
    //             }
    //         }
    //     }
    // res.status(403).render("login",{error:"Sry, you did not provide the valid email"});

    // passport.authenticate('local',{
    //     successRedirect:'/homePage',
    //     failureRedirect:'/',
    //     failureFlash:true
    // })


    let getEmail = xss(req.body.inputEmailName);
    let getPassWord = xss(req.body.inputPassWord);
    let allUserInfo = await userData.getAllUser();
    let comparePassword = false;
        for(let i=0;i<allUserInfo.length;i++){
            var getUser = allUserInfo[i];
            if(getUser.email == getEmail){
                try {
                    comparePassword = await bcrypt.compare(getPassWord, getUser.password);
                  } catch (e) {
                    res.status(500).json({ error: e });
                  }
                // getUser.password == getPassWord
                if(comparePassword){
                    res.cookie('AuthCookie','authenticated',{ maxAge: 3600000 });
                    res.cookie('userId',getUser._id);
                    // res.cookie('userData',getUser);
                    res.redirect("/homePage");
                    return;
                }else{
                    res.status(403).render("login",{error:"Sorry, username or password is incorrect"});
                    return;
                }
            }
        }
    res.status(403).render("login",{error:"Sorry, username or password is incorrect"});


});

module.exports = router;