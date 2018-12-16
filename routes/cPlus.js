const express = require("express");
const router = express.Router();
const data = require("../data");
const userData = data.userData;

router.get("/", async (req, res) => {
  let test = null;

  if(!req.cookies.userId){
    res.status(403).render("login",{error: "Please login first!"});
  } else {
    try {
      test = await userData.getUserById(req.cookies.userId);

    } catch (e) {
        res.status(500).json({ error: e });
    }

    if(req.cookies.AuthCookie == "authenticated"){
      if (((test["cPlusProgress"] / 100) * 4) == 0) {
        res.render("topic_pages/cPlus_info", {title: "C++"});
      }
      else if (((test["cPlusProgress"] / 100) * 4) == 1) {
        res.render("topic_pages/cPlus1", {title: "C++"});
      }
      else if (((test["cPlusProgress"] / 100) * 4) == 2) {
        res.render("topic_pages/cPlus2", {title: "C++"});
      }
      else if (((test["cPlusProgress"] / 100) * 4) == 3) {
        res.render("topic_pages/cPlus3", {title: "C++"});
      }
      else if (((test["cPlusProgress"] / 100) * 4) == 4) {
        try {
          const newUserProgress = await userData.updatecPlusProgress(req.cookies.userId, ((0 / 4) * 100));
      
        } catch (e) {
            res.status(500).json({ error: e });
        }
        res.render("topic_pages/cPlus_info", {title: "C++"});
      }
      else {
        console.log("Shouldn't be here")
        res.render("topic_pages/cPlus_info", {title: "C++"});
      }
    }else{
        res.status(403).render("login",{error: "Please login first!"});
    }
  }
});

router.post("/", async (req, res) => {
  if(req.cookies.AuthCookie == "authenticated"){
    res.render("topic_pages/cPlus_info", {title: "C++"});
  }else{
      res.status(403).render("login",{error: "Please login first!"});
  }

  if(!req.cookies.userId){
    res.status(403).render("login",{error: "Please login first!"});
  } else {
    try {
      const newUserProgress = await userData.updatecPlusProgress(req.cookies.userId, ((0 / 4) * 100));

    } catch (e) {
        res.status(500).json({ error: e });
    }
  }
});

module.exports = router;
