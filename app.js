const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => res.render("index"));
app.get("/about", (req, res) => res.render("about"));
app.get("/projects", (req, res) => res.render("projects"));
app.get("/contact", (req, res) => res.render("contact"));

// Start server
app.listen(port, () => {
  console.log(`Portfolio app listening at http://localhost:${port}`);
});
