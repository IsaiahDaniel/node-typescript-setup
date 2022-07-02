import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json("API running");
});

app.listen(3000, () => {
  console.log(`Server is Listening on 3000`);
});
