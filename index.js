import express from "express";

const app = express();
const PORT = 3000;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));;

app.get("/", (req, res) => {
    res.render("index.ejs");
});
let item=[];
app.post("/add", (req, res) => {
    
    item.push(req.body.item);
    res.render("index.ejs",{newItem: item});
});
app.post("/delete", (req, res) => {
    console.log(req.body);
    res.render("index.ejs",{newItem: item});
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});