const db = require("../db");

function getAuthorById(req, res) {
  const { authorId } = req.params;

  const author = db.getAuthorById(Number(authorId));

  if (!author) {
    res.status(404).send("Author not found");
    return;
  }

  res.send(`Author: ${author.name}`);
}

module.exports = getAuthorById;
