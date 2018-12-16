const express = require('express');
const router = express.Router();
const data = require("../data");
const discussionData = data.discussion;
const xss = require("xss");

router.post("/", async (req, res) => {
    //console.log(req.body);
    //console.log(1);
    if (req.cookies.AuthCookie == "authenticated") {
        try {
            const id = xss(req.body.discussion_id);
            const comment = xss(req.body.comment);

            const discussion = await discussionData.getdiscussionById(id);
            let comment1 = discussion.comment;
            comment1.push({ comment_text: comment });

            let newdiscussion = {
                discussion_id: discussion.discussion_id,
                user: discussion.user,
                timestamp: discussion.timestamp,
                topicName: discussion.topicName,
                description: discussion.description,
                comment: comment1,
            }

            const discussion_update = await discussionData.updatediscussion(id, newdiscussion);

            res.json(discussion_update);

        } catch (e) {
            res.status(500).json({ error: e });
        }
    } else {
        res.status(403).render("login", { error: "Please login first!" });
    }
});

module.exports = router;