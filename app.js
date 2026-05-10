const express = require("express");
const app = express();

const authorRouter = require("./routes/authorRouter");

app.use("/authors", authorRouter);

app.listen(8000, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Listening to port 8000...`);
});
