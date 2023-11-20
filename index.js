import express from "express";
import bodyParser from "body-parser";
import { writeFile } from 'node:fs';
import { Buffer } from 'node:buffer';

const app = express();
const port = 3000;

let postText = ""

const data = new Uint8Array(Buffer.from('<%- include("partials/header.ejs") %><%= postText %><%- include("partials/footer.ejs") %>'));


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));


function logger(req, res, next){
    postText = (req.body["log"]);
    next();
}

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
    res.redirect("https://noel-pena.github.io/Portfolio/")
});

app.get("/post", (req, res) => {
    res.render("post.ejs");
});

app.get("/logs", (req, res) => {
    res.render("logs.ejs");
});

app.use(logger);

app.post("/posted", (req, res) => {
    res.render("posted.ejs");
    // let output = [];
    // for(let i = 1; i<)

    writeFile('./views/notes/notes' + [i] + '.ejs', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
});

// app.get("/" + "notes" + i)
  
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});