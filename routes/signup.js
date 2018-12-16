const express = require('express');
const router = express.Router();
const data = require("../data");
const userData = data.userData;
const bcrypt = require("bcryptjs");
const saltRounds = 16;
const xss = require("xss");

router.get("/",(req,res)=>{
    res.render("signup",{});

});

router.post('/',async (req,res)=>{
    let getEmail = xss(req.body.signUpEmailName);
    let getPassWord = xss(req.body.signUpPassWord);
    let getConfirmPassword = xss(req.body.signUpConfirmPassWord);

    // if(getEmail && getPassWord && getConfirmPassword){
        // res.redirect("/login");
    // }

    if(!req.body){
      res.status(400).json({error:"You must provide user information"});
      return;
    }
    if(!getEmail){
        res.status(400).json({error:"You must provide user email"});
        return;
    }
    if(!getPassWord){
        res.status(400).json({error:"You must provide user password"});
        return;
    }
    if(!getConfirmPassword){
        res.status(400).json({error:"You must provide user confirm password"});
        return;
    }
    if(typeof getEmail !== "string"){
        res.status(400).json({error:"email must be string"});
        return;
    }

    //check for vlid email address
    let flagForAt = false;
    for(let i=0;i<getEmail.length;i++){
        if(getEmail.charAt(i) == "@"){
            flagForAt = true;
            break;
        }
    }
    if(!flagForAt){
        res.status(400).json({error:"email is invalid"});
        return;
    }

    //hash the password

    // const hashedPassword = await bcrypt.hash(getPassWord, saltRounds);

    try{
        const hashedPassword = await bcrypt.hash(getPassWord, saltRounds);
        // const {title,ingredients,steps} = recipesPostData;
        const newUser = await userData.addUser(getEmail,hashedPassword);
        // res.json(newUser);
        res.redirect("/login");
    }catch(e){
        res.status(500).json({ error: e });
    }
});

module.exports = router;