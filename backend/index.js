import express from "express";
import mongoose from "mongoose";
const app = express();

// app.use("/api", (req, res, next) => {
//     res.send("Hello World!")
// })
//NishNish

mongoose.connect("mongodb+srv://admin:NishNish@cluster0.g3o25kk.mongodb.net/?retryWrites=true&w=majority"
).then(()=> app.listen(5000))
.then(()=>
    console.log("Connected to the Database and Listening to Localhost:5000"))
.catch((err)=>console.log(err));