import express from "express";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();


app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});


app.get("/page1", (req, res) => {
  res.sendFile(path.join(__dirname, "page1", "index.html"));
});


app.get("/page2", (req, res) => {
  res.sendFile(path.join(__dirname, "page2", "index.html"));
});


app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
