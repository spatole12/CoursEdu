const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const data = require("../data");
const discussionData = data.discussion;
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const uuid = require('uuid/v4');// id
const xss = require("xss");

router.get("/", async (req, res) => {
    if (req.cookies.AuthCookie == "authenticated") {
        try {
            //console.log(get);
            const discussionList = await discussionData.getAlldiscussion();

            res.status(200).render('./pages/Discussion', { discussion: discussionList });
        }
        catch (e) {
            res.status(500).json({ error: "Not found" });
        }
    } else {
        res.status(403).render("login", { error: "Please login first!" });
    }
});



router.post("/", async (req, res) => {
    // const bdiscussionData = req.body);
    //console.log((bdiscussionData))

    if (req.cookies.AuthCookie == "authenticated") {
        if (!req.cookies.userId) {
            res.status(403).render("login", { error: "Please login first!" });
        } else {
            try {

                const discussion_id = uuid();
                const timestamp = new Date();
                const user = req.cookies.userId;
                const topicName = xss(req.body.topicName);
                const description = xss(req.body.description);
                const comment = xss(req.body.comment);
                if (topicName == "") {
                    const discussionList = await discussionData.getAlldiscussion();
                    res.status(403).render("./pages/Discussion", { discussion: discussionList, error: "Sorry, you did not provide topic name" });
                    //return;
                } else if(description == "") {
                    const discussionList = await discussionData.getAlldiscussion();
                    res.status(403).render("./pages/Discussion", { discussion: discussionList, error: "Sorry, you did not provide description" });
                    //return;

                }else {
                    //const newdiscussion = await discussionData.adddiscussion(discussion_id, user, topicName, description, test, timestamp);
                    const newdiscussion = await discussionData.adddiscussion(discussion_id, user, topicName, description, comment, timestamp);
                    //res.json(newdiscussion);
                    const discussionList = await discussionData.getAlldiscussion();
                    res.status(200).render('./pages/Discussion', { discussion: discussionList });
                }
            } catch (e) {
                res.status(500).json({ error: e });
            }
            //const newdiscussion = await discussionData.adddiscussion("b184aa09-5f46-4af9-a856-5aeeb3eb6c4a", "Shivani", topicName, comment, timestamp);
        }
    } else {
        res.status(403).render("login", { error: "Please login first!" });
    }


});

module.exports = router;


