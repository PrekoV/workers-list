const express = require("express");
const router = express.Router();

const workers = [
  {
    id: 2,
    name: "name1",
    date: "11/11/11",
    rate: 2000,
    position: "developer"
  },
  {
    id: 28,
    name: "name12",
    date: "02/02/02",
    rate: 27000,
    position: "team lead"
  },
  {
    id: 3,
    name: "name1424",
    date: "10/6/2",
    rate: 5000,
    position: "developer php"
  },
  {
    id: 25,
    name: "name11212",
    date: "11/10/01",
    rate: 23000,
    position: "developer Js"
  }
];

router.get("/", (req, res) => {
  res.send(workers);
});

router.put("/:id", (req, res) => {
  const id = Number(req.params["id"]);
  const currentValues = req.body;
  const currentItem = workers.find(item => item.id === id);

  if (currentItem) {
    for (const key in currentItem) {
      if (Object.prototype.hasOwnProperty.call(currentValues, key)) {
        currentItem[key] = currentValues[key];
      }
    }
    res.send(workers);
  } else {
    res.send({ message: "No such worker" }).status(404);
  }
});

router.post("/", (req, res) => {
  const newWorker = { ...req.body };
  workers.push({ ...newWorker, id: Math.round(Math.random() * 100) });
  console.log(newWorker, workers);
  res.send(workers);
});

router.delete("/:id", (req, res) => {
  workers = workers.filter(item => item.id === Number(req.query.id));
  res.send(workers);
});

module.exports = router;
