/**
 * Required External Modules
 */
 const express = require("express");
 const path = require("path");

/**
 * App Variables
 */
 const app = express();
 const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */

// To connect the templates with the controllers, we need to configure Express to use Pug as the view template engine.
//  app.set("views", path.join(__dirname, "views"));
//  app.set("view engine", "pug");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions
 */

//  app.get("/", (req, res) => {
//     res.status(200).send("WHATABYTE: Food For Devs");
//   });

//updating route handler to make it render index.pug as the client response
  app.get("/", (req, res) => {
    // res.render("index", { title: "Home" });
    res.render("user", { title: "Profile", userProfile: { nickname: "Auth0" } });
  });

/**
 * Server Activation
 */

 app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });