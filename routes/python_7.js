const express = require("express");
const router = express.Router();
const data = require("../data");
const userData = data.userData;

router.post("/", async (req, res) => {
  if(req.cookies.AuthCookie == "authenticated"){
    res.render("topic_pages/python7", {title: "Python"});
  } else{
    res.status(403).render("login",{error: "Please login first!"});
  }

  if(!req.cookies.userId){
    res.status(403).render("login",{error: "Please login first!"});
  } else {
    try {
      const newUserProgress = await userData.updatePythonProgress(req.cookies.userId, ((7 / 8) * 100));

    } catch (e) {
        res.status(500).json({ error: e });
    }
  }
});

module.exports = router;
