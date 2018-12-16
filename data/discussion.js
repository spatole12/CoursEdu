const uuid = require('uuid/v4');// id
const mongoCollections = require("../config/mongoCollections");
const discussion = mongoCollections.discussion;
//uuidv4(); // ⇨ '10ba038e-48da-487b-96e8-8d3b99b6d18a'
let exportedMethods = {
    async getAlldiscussion() {
        const discussionCollection = await discussion();
        const alldiscussion = await discussionCollection.find({}).toArray();
        return alldiscussion;
    },
    async getdiscussionById(id) {
        if (!id) throw "You must provide an id to search for";

        const discussionCollection = await discussion();
        const discussion_id = await discussionCollection.findOne({ discussion_id: id });
        //if (discussion_id === null) throw "No discussion with that id";
        return discussion_id;
    },
    async updatediscussion(id, newdiscussion) {
        if (!id) throw "You must provide an id to search for";
        if(typeof(newdiscussion) !== "object") throw "Need comment"
        if (!newdiscussion) throw "You must provide a new discussion to update.";
       // const discussion = await discussionData.getdiscussionById(id);
        const discussionCollection = await discussion();
        const updateddiscussion = await discussionCollection.updateOne({ discussion_id: id }, { $set: newdiscussion });
        //console.log(newdiscussion);
        if (updateddiscussion === null)
            throw "discussion is not updated.";
        const discussionResult = await this.getdiscussionById(id);
        return discussionResult;
    },
    async adddiscussion(discussion_id, user, topicName, description, comment, timestamp) {
        if (!user) throw "No user provided";
        if (!topicName) throw "No topic name provided";
        if (!description) throw "No description provided";
        // (!comment) throw "No comment provided";
        if (!timestamp) throw "No timestamp provided";
        //create in the db
        const discussionCollection = await discussion();
        if (!Array.isArray(comment)) {
            comment = [];
          }
        let newdiscussion = {
            "discussion_id": discussion_id,
            "user": user,
            "topicName": topicName,
            "description": description,
            "comment": comment,
            "timestamp": timestamp
        }
        const newInsertInformation = await discussionCollection.insertOne(newdiscussion);
        return newdiscussion;
    },
    async addSeedDiscussion(user, topicName, description, comment, timestamp){
        if (!user) throw "No user provided";
        if (!topicName) throw "No topic name provided";
        if (!description) throw "No description provided";
        if (!comment) throw "No comment provided";
        if (!timestamp) throw "No timestamp provided";
        const discussionCollection = await discussion();
        const newdiscussionData = {
            discussion_id:uuid(),
            user: user,
            timestamp: timestamp,
            topicName: topicName,
            description: description,
            comment: comment
        }

       // try{
        const insertInfo = await discussionCollection.insertOne(newdiscussionData);
       
        // }catch(e){
        //     throw "Issue with insertOne mongodb.";
        // }
        if(insertInfo.insertedCount === 0)throw "Could not add a new discussion";

        const newdiscussion = await this.getdiscussionById(insertInfo.insertedId);
        return newdiscussion;
    },
}
module.exports = exportedMethods;