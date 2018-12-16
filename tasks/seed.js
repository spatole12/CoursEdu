const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const userData = data.userData;
const discussionData = data.discussion;
const bcrypt = require("bcryptjs");
const saltRounds = 16;

async function main() {
    const db = await dbConnection();
    await db.dropDatabase();
  
  //   const phil = await users.addUser("Phil", "Barresi");
  //   const id = phil._id;
  const hashPass = await bcrypt.hash("12345", saltRounds);
  await userData.addSeedUser("wesley@163.com",hashPass,0,0,0,0,0,0,0,0);

  const hashPass1 = await bcrypt.hash("121", saltRounds);
  await userData.addSeedUser("zhouweijia2017@163.com",hashPass1,0,0,0,0,0,0,0,0);
  //seed discussion
  const comment =[ 
    {comment_text:"Yes, I do!"},
    {comment_text:"Of course"},
    {comment_text:"I don't know."},
]
  await discussionData.addSeedDiscussion("zxn","js","Do you like js?",
  comment,"Wed Dec 11 2018 18:46:23 GMT-0500 (EST)");
console.log("Done seeding database");
//This code is not correct, coz we can't use db.close rather than serverCongid.close
await db.serverConfig.close();
}
  
main();