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
      if (((test["javaProgress"] / 100) * 4) == 0) {
        res.render("topic_pages/java_info", {title: "Java"});
      }
      else if (((test["javaProgress"] / 100) * 4) == 1) {
        res.render("topic_pages/java1", {title: "Java"});
      }
      else if (((test["javaProgress"] / 100) * 4) == 2) {
        res.render("topic_pages/java2", {title: "Java"});
      }
      else if (((test["javaProgress"] / 100) * 4) == 3) {
        res.render("topic_pages/java3", {title: "Java"});
      }
      else if (((test["javaProgress"] / 100) * 4) == 4) {
        try {
          const newUserProgress = await userData.updateJavaProgress(req.cookies.userId, ((0 / 4) * 100));
      
        } catch (e) {
            res.status(500).json({ error: e });
        }
        res.render("topic_pages/java_info", {title: "Java"});
      }
      else {
        console.log("Shouldn't be here")
        res.render("topic_pages/java_info", {title: "Java"});
      }
    }else{
      res.status(403).render("login",{error: "Please login first!"});
    }
  }
});

router.post("/", async (req, res) => {
  if(req.cookies.AuthCookie == "authenticated"){
    res.render("topic_pages/java_info", {title: "Java"});
  }else{
      res.status(403).render("login",{error: "Please login first!"});
  }

  if(!req.cookies.userId){
    res.status(403).render("login",{error: "Please login first!"});
  } else {
    try {
      const newUserProgress = await userData.updateJavaProgress(req.cookies.userId, ((0 / 4) * 100));

    } catch (e) {
        res.status(500).json({ error: e });
    }
  }
});

module.exports = router;
