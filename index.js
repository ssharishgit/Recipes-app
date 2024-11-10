const recipeRoutes = require("./routes/recipeRoutes")
const connection =  require('./db/connection')

const express = require('express');
const app =  express()

//start our server PORT establish the connection
const PORT = 3000;
connection()
//  serever response will be in the JSON
app.use(express.json())

// root end point
app.get('/',(req,res)=>{
  res.send("Recipes App")
})

app.use(recipeRoutes)
// listen to port
app.listen(PORT,()=>{
  console.log("Server started at",PORT)
})