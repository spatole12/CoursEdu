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
      if (((test["javaScriptProgress"] / 100) * 8) == 0) {
        res.render("topic_pages/javascript_info", {title: "Javascript"});
      }
      else if (((test["javaScriptProgress"] / 100) * 8) == 1) {
        res.render("topic_pages/javascript1", {title: "Javascript"});
      }
      else if (((test["javaScriptProgress"] / 100) * 8) == 2) {
        res.render("topic_pages/javascript2", {title: "Javascript"});
      }
      else if (((test["javaScriptProgress"] / 100) * 8) == 3) {
        res.render("topic_pages/javascript3", {title: "Javascript"});
      }
      else if (((test["javaScriptProgress"] / 100) * 8) == 4) {
        res.render("topic_pages/javascript4", {title: "Javascript"});
      }
      else if (((test["javaScriptProgress"] / 100) * 8) == 5) {
        res.render("topic_pages/javascript5", {title: "Javascript"});
      }
      else if (((test["javaScriptProgress"] / 100) * 8) == 6) {
        res.render("topic_pages/javascript6", {title: "Javascript"});
      }
      else if (((test["javaScriptProgress"] / 100) * 8) == 7) {
        res.render("topic_pages/javascript7", {title: "Javascript"});
      }
      else if (((test["javaScriptProgress"] / 100) * 8) == 8) {
        try {
          const newUserProgress = await userData.updateJSProgress(req.cookies.userId, ((0 / 8) * 100));
      
        } catch (e) {
            res.status(500).json({ error: e });
        }
        res.render("topic_pages/javascript_info", {title: "Javascript"});
      }
      else {
        console.log("Shouldn't be here")
        res.render("topic_pages/javascript_info", {title: "Javascript"});
      }
    }else{
      res.status(403).render("login",{error: "Please login first!"});
    }
  }
});

router.post("/", async (req, res) => {
  if(req.cookies.AuthCookie == "authenticated"){
    res.render("topic_pages/javascript_info", {title: "Javascript"});
  }else{
      res.status(403).render("login",{error: "Please login first!"});
  }

  if(!req.cookies.userId){
    res.status(403).render("login",{error: "Please login first!"});
  } else {
    try {
      const newUserProgress = await userData.updateJSProgress(req.cookies.userId, ((0 / 8) * 100));

    } catch (e) {
        res.status(500).json({ error: e });
    }
  }
});

module.exports = router;
