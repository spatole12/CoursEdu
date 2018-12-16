const loginRoutes = require("./login");
const signupRoutes = require("./signup");
const homePageRoutes = require("./homePage");
const logoutRoutes = require("./logout");
const progressRoutes = require("./progress");
const javascriptRoutes = require("./javascript");
const javascriptRoutes1 = require("./javascript_1");
const javascriptRoutes2 = require("./javascript_2");
const javascriptRoutes3 = require("./javascript_3");
const javascriptRoutes4 = require("./javascript_4");
const javascriptRoutes5 = require("./javascript_5");
const javascriptRoutes6 = require("./javascript_6");
const javascriptRoutes7 = require("./javascript_7");
const pythonRoutes = require("./python");
const pythonRoutes1 = require("./python_1");
const pythonRoutes2 = require("./python_2");
const pythonRoutes3 = require("./python_3");
const pythonRoutes4 = require("./python_4");
const pythonRoutes5 = require("./python_5");
const pythonRoutes6 = require("./python_6");
const pythonRoutes7 = require("./python_7");
const javaRoutes = require("./java");
const javaRoutes1 = require("./java_1");
const javaRoutes2 = require("./java_2");
const javaRoutes3 = require("./java_3");
const cPlusRoutes = require("./cPlus");
const cPlusRoutes1 = require("./cPlus_1");
const cPlusRoutes2 = require("./cPlus_2");
const cPlusRoutes3 = require("./cPlus_3");
const commentroutes = require("./comment");
const dis_routes = require("./dis_routes");


const constructorMethod = (app) => {
  app.use("/comment", commentroutes);
  app.use("/Discussion",dis_routes);
  app.use("/login", loginRoutes);
  app.use("/signup",signupRoutes);
  app.use("/homePage",homePageRoutes);
  app.use("/logout",logoutRoutes);
  app.use("/progress",progressRoutes);
  app.use("/javascript", javascriptRoutes);
  app.use("/javascript_1", javascriptRoutes1);
  app.use("/javascript_2", javascriptRoutes2);
  app.use("/javascript_3", javascriptRoutes3);
  app.use("/javascript_4", javascriptRoutes4);
  app.use("/javascript_5", javascriptRoutes5);
  app.use("/javascript_6", javascriptRoutes6);
  app.use("/javascript_7", javascriptRoutes7);
  app.use("/python", pythonRoutes);
  app.use("/python_1", pythonRoutes1);
  app.use("/python_2", pythonRoutes2);
  app.use("/python_3", pythonRoutes3);
  app.use("/python_4", pythonRoutes4);
  app.use("/python_5", pythonRoutes5);
  app.use("/python_6", pythonRoutes6);
  app.use("/python_7", pythonRoutes7);
  app.use("/java", javaRoutes);
  app.use("/java_1", javaRoutes1);
  app.use("/java_2", javaRoutes2);
  app.use("/java_3", javaRoutes3);
  app.use("/cPlus", cPlusRoutes);
  app.use("/cPlus_1", cPlusRoutes1);
  app.use("/cPlus_2", cPlusRoutes2);
  app.use("/cPlus_3", cPlusRoutes3);

  app.use("*", (req, res) => {
    res.redirect("/homePage");
  });

};

module.exports = constructorMethod;