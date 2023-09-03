import express from "express";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

let tasks = [];
app.get("/", (req, res) => {
    res.render("index.ejs",{tasks:tasks}
    );
});
app.get("/tasks", (req, res) => {
    res.render("tasks.ejs", { tasks: tasks });
});
// we are creating to do list app
app.post("/", (req, res) => {
    tasks.push(req.body.task);
    console.log(tasks);
    res.render("index.ejs",{tasks:tasks});
});
app.post("/update", (req, res) => {
    console.log(req.body);
    res.send("update");
});
app.post("/delete", (req, res) => {
    tasks.splice(req.body.index, 1);
    console.log(tasks);
    res.render("index.ejs",{tasks:tasks});
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});