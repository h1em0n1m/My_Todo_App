const express = require("express");
const app = express();

const tasks = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/todos", (req, res) => {
  console.log("api/todos called!");
  res.json(tasks);
});

app.post("/api/todo", (req, res) => {
  console.log("Adding now!");
  tasks.push(req.body);
  res.json("todo added!");
});

app.delete("/api/delete/:id", (req, res) => {
  const idx = tasks.findIndex(obj => obj.id === req.params.id);
  tasks.splice(idx, 1);
  res.json("todo deleted!");
});

app.put("/api/update/name/:id", (req, res) => {
  const idx = tasks.findIndex(obj => obj.id === req.params.id);
  tasks[idx].name = req.body.name;
  res.json("todo updated!");
});

app.put("/api/update/check/:id", (req, res) => {
  const idx = tasks.findIndex(obj => obj.id === req.params.id);
  tasks[idx].done = req.body.done;
  res.json("Checking!");
});

app.listen(3070, () => {
  console.log("Server listening on the port::3070");
});
