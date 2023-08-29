import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";
const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let listTodo = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render(_dirname + "/views/index.ejs");
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});