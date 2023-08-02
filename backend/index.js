const express = require("express")
const mongoose = require("mongoose")
const app = express()

mongoose.connect("").then(() => {
    console.log("Connection to mongoDB have been successful");
    app.listen(3001, () => {
        console.log("App is running at port: 3001");
    })
}).catch((err) => {
    console.log(`AN ERROR OCCURED WHEN TRYING TO CONNECT TO YOUR DADATABASE: ${err}`);
})

app.use(express.json())
app.use(express.text())

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.get("/", (req,res) => {
    res.text("Hi, I am a placeholder!")
})
