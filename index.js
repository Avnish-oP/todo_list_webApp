import express from "express";

const app = express();
const PORT = 3000;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));;

app.get("/", (req, res) => {
    res.render("index.ejs");
});
let tasks=[];
app.post("/add", (req, res) => { 
    tasks.push(req.body.item);
    res.render("index.ejs",{newItem: tasks});
    res.redirect("/");
});

app.post("/delete", (req, res) => {
    console.log(req.body);
    tasks.splice(req.body.id,1);
    res.render("index.ejs",{newItem: tasks});
});
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});