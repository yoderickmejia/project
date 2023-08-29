
import express from "express";
import indexRouter from "./routes/routes.js";
import db  from "./Database/db.js";
const app = express();
import bodyParser from "body-parser";
//port
import cors from 'cors';

app.set("port", process.env.port || 3000)
app.use(cors()); 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//routes
app.use("/",indexRouter)
app.use("*", (req,res)=> {
  res.send(" 404 - not found")
})
//start server
app.listen(app.get("port"), () => {

    console.log("server is runnign in port ", app.get("port"));
});

//connect to mysql

db.connect()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
