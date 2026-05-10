const express = require("express");
const app = express();

const authorRouter = require("./routes/authorRouter");
const booksRouter = require("./routes/booksRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/authors", authorRouter);
app.use("/books", booksRouter);
app.use("/", indexRouter);
app.use("/", (req, res) => {
  res.status(404).send("Page does not exist");
});

app.listen(8000, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Listening to port 8000...`);
});
