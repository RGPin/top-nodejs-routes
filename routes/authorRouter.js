const express = require("express");
const authorController = require("../controllers/authorControllers");

const authorRouter = express.Router();

authorRouter.get("/", (req, res) =>
  res.send("Pretend there's a list of authors here"),
);

authorRouter.get("/:authorId", authorController);

module.exports = authorRouter;
