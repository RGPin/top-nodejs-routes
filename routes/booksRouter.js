const express = require("express");

const booksRouter = express.Router();

booksRouter.get("/", (req, res) =>
  res.send("Pretend there's a list of books here"),
);

booksRouter.get("/:bookId", (req, res) => {
  const { bookId } = req.params;
  res.send(`Book ID: ${bookId}`);
});

module.exports = booksRouter;
