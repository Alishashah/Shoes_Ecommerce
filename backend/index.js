const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const database = require("./database/connection");
const router = require("./routes/route");
const cors = require("cors");
const ExpressError = require("./utils/ExpressError");
const path = require("path")
const cookie=require("cookie-parser")

// database connectivity

database()
  .then((res) => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
// app.use(express.static(__dirname));
app.use('./uploads', express.static(path.join(__dirname, './uploads')));
app.use(cookie())


app.use(router);

// express error page not found

// app.use("*",(err,req,res,next)=>{
//      next(new ExpressError(404, 'Route not found',err.message))
// })

app.use((err, req, res, next) => {
  let { status = 401, message = "something went wrong" } = err;
  res.status(status).send(message);
  next(message);
});



app.listen(PORT, () => {
  console.log("Shomes connect");
});
