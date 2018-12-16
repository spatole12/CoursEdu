const mongoCollections = require("../config/mongoCollections");
const userData = mongoCollections.userData;
const uuid = require("uuid");

let exportedMethods = {

    async getAllUser() {
        const userDataCollection = await userData();
        userDataCollectionArray = await userDataCollection.find({}).toArray();
        userEmailPassword = [];
        for (let i = 0; i < userDataCollectionArray.length; i++) {
            info = {};
            info._id = userDataCollectionArray[i]._id;
            info.email = userDataCollectionArray[i].email;
            info.password = userDataCollectionArray[i].password;
            userEmailPassword.push(info);
        }
        return userEmailPassword;
    },

    async addUser(userEmail, userPassword) {
        if (typeof userEmail !== "string") throw "No email provided";
        if (!userPassword) throw "No password provided";
        const userCollection = await userData();
        const newUserData = {
            _id: uuid.v4(),
            email: userEmail,
            password: userPassword,
            javaProgress: 0,
            javaScriptProgress: 0,
            pythonProgress: 0,
            cPlusProgress: 0,
            javaQuiz: 0,
            javaScriptQuiz: 0,
            pythonQuiz: 0,
            cPlusQuiz: 0
        }

        const insertInfo = await userCollection.insertOne(newUserData);

        if (insertInfo.insertedCount === 0) throw "Could not add a new user";
        const newUser = await this.getUserById(insertInfo.insertedId);
        return newUser;
    },

    async addSeedUser(userEmail, userPassword, javaProgress, javaScriptProgress, pythonProgress, cPlusProgress, javaQuiz, javaScriptQuiz, pythonQuiz, cPlusQuiz) {
        // if(typeof userEmail !== "string")throw "No email provided";
        if (typeof userEmail !== "string") throw "No email provided";
        if (!userPassword) throw "No password provided";
        if (isNaN(javaProgress)) throw "You must provide a page number to update";
        if (isNaN(javaQuiz)) throw "You must provide a quiz score to update";
        if (isNaN(pythonProgress)) throw "You must provide a page number to update";
        if (isNaN(pythonQuiz)) throw "You must provide a quiz score to update";
        if (isNaN(javaScriptProgress)) throw "You must provide a page number to update";
        if (isNaN(javaScriptQuiz)) throw "You must provide a quiz score to update";
        if (isNaN(cPlusProgress)) throw "You must provide a page number to update";
        if (isNaN(cPlusQuiz)) throw "You must provide a quiz score to update";
        const userCollection = await userData();
        const newUserData = {
            _id: uuid.v4(),
            email: userEmail,
            password: userPassword,
            javaProgress: javaProgress,
            javaScriptProgress: javaScriptProgress,
            pythonProgress: pythonProgress,
            cPlusProgress: cPlusProgress,
            javaQuiz: javaQuiz,
            javaScriptQuiz: javaScriptQuiz,
            pythonQuiz: pythonQuiz,
            cPlusQuiz: cPlusQuiz
        }

        const insertInfo = await userCollection.insertOne(newUserData);

        if (insertInfo.insertedCount === 0) throw "Could not add a new user";

        const newUser = await this.getUserById(insertInfo.insertedId);
        return newUser;
    },

    async getUserById(id) {
        if (!id) throw "You must provide an id to search for";
        const userCollection = await userData();

        const userInfo = await userCollection.findOne({ _id: id });

        if (userInfo == null) throw " No userInfo with that email, please logout and log back in";
        return userInfo;
    },

    async getUserByEmail(email) {
        if (!email) throw "You must provide an email to search for!";
        const userCollection = await userData();
        const userInfo1 = await userCollection.findOne({ email: email });
        if (userInfo1 == null) throw " No userInfo with that email, please logout and log back in";
        return userInfo1;
    },

    async updateJSQuizScore(id, total) {
        if (!id) throw "You must provide an id to search for";
        if (isNaN(total)) throw "You must provide a quiz score to update";
        const userCollection1 = await userData();

        const updatedQuizScore = {};
        updatedQuizScore.javaScriptQuiz = total;

        let updateCommand = {
            $set: updatedQuizScore
        };
        const query = {
            _id: id
        };
        await userCollection1.updateOne(query, updateCommand);

        return await this.getUserById(id);
    },

    async updateJSProgress(id, current) {
        if (!id) throw "You must provide an id to search for";
        if (isNaN(current)) throw "You must provide a page number to update";
        const userCollection1 = await userData();

        const updatedProgress = {};
        updatedProgress.javaScriptProgress = current;

        let updateCommand = {
            $set: updatedProgress
        };
        const query = {
            _id: id
        };
        await userCollection1.updateOne(query, updateCommand);

        return await this.getUserById(id);
    },

    async updatePythonQuizScore(id, total) {
        if (!id) throw "You must provide an id to search for";
        if (isNaN(total)) throw "You must provide a quiz score to update";
        const userCollection1 = await userData();

        const updatedQuizScore = {};
        updatedQuizScore.pythonQuiz = total;

        let updateCommand = {
            $set: updatedQuizScore
        };
        const query = {
            _id: id
        };
        await userCollection1.updateOne(query, updateCommand);

        return await this.getUserById(id);
    },

    async updatePythonProgress(id, current) {
        if (!id) throw "You must provide an id to search for";
        if (isNaN(current)) throw "You must provide a page number to update";
        const userCollection1 = await userData();

        const updatedProgress = {};
        updatedProgress.pythonProgress = current;

        let updateCommand = {
            $set: updatedProgress
        };
        const query = {
            _id: id
        };
        await userCollection1.updateOne(query, updateCommand);

        return await this.getUserById(id);
    },

    async updateJavaQuizScore(id, total) {
        if (!id) throw "You must provide an id to search for";
        if (isNaN(total)) throw "You must provide a quiz score to update";
        const userCollection1 = await userData();

        const updatedQuizScore = {};
        updatedQuizScore.javaQuiz = total;

        let updateCommand = {
            $set: updatedQuizScore
        };
        const query = {
            _id: id
        };
        await userCollection1.updateOne(query, updateCommand);

        return await this.getUserById(id);
    },

    async updateJavaProgress(id, current) {
        if (!id) throw "You must provide an id to search for";
        if (isNaN(current)) throw "You must provide a page number to update";
        const userCollection1 = await userData();

        const updatedProgress = {};
        updatedProgress.javaProgress = current;

        let updateCommand = {
            $set: updatedProgress
        };
        const query = {
            _id: id
        };
        await userCollection1.updateOne(query, updateCommand);

        return await this.getUserById(id);
    },

    async updatecPlusQuizScore(id, total) {
        if (!id) throw "You must provide an id to search for";
        if (isNaN(total)) throw "You must provide a quiz score to update";
        const userCollection1 = await userData();

        const updatedQuizScore = {};
        updatedQuizScore.cPlusQuiz = total;

        let updateCommand = {
            $set: updatedQuizScore
        };
        const query = {
            _id: id
        };
        await userCollection1.updateOne(query, updateCommand);

        return await this.getUserById(id);
    },

    async updatecPlusProgress(id, current) {
        if (!id) throw "You must provide an id to search for";
        if (isNaN(current)) throw "You must provide a page number to update";
        const userCollection1 = await userData();

        const updatedProgress = {};
        updatedProgress.cPlusProgress = current;

        let updateCommand = {
            $set: updatedProgress
        };
        const query = {
            _id: id
        };
        await userCollection1.updateOne(query, updateCommand);

        return await this.getUserById(id);
    }
}

module.exports = exportedMethods;