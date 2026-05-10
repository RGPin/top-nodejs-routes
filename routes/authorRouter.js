const express = require("express");

const authorRouter = express.Router();

authorRouter.get("/", (req, res) =>
  res.send("Pretend there's a list of authors here"),
);

authorRouter.get("/:authorId", (req, res) => {
  const { authorId } = req.params;
  res.send(`Author ID: ${authorId}`);
});

module.exports = authorRouter;
