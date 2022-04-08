const express = require("express");
const format = require("date-format");

const app = express();
const PORT = process.env.PORT || 4000;
const date = format.asString("dd - MM - yy hh:mm:ss", new Date());

// Dummy message objects
const messages = [
  {
    _id: 1,
    sender: "hasib",
    message: "Hey, there!",
    sentAt: date,
  },
  {
    _id: 2,
    sender: "muhammad",
    message: "Assalamu alaikum!",
    sentAt: date,
  },
  {
    _id: 3,
    sender: "joy",
    message: "Hey, there!",
    sentAt: date,
  },
  {
    _id: 4,
    sender: "akash",
    message: "Hey, there!",
    sentAt: date,
  },
  {
    _id: 5,
    sender: "maliha",
    message: "Hey, there!",
    sentAt: date,
  },
];

app.get("/", (req, res) => {
  res.status(200).send("Welcome, on message!");
});

app.get("/api/v1/messages", (req, res) => {
  res.status(200).json(messages);
});

app.get("/api/v1/message/:_id", (req, res) => {
  let message = messages.filter((msg) => msg._id === parseInt(req.params._id));

  if (message.length !== 0) {
    res.status(200).json(message);
  } else {
    res.status(200).json({ param: req.params._id });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening port:${PORT}`);
});
