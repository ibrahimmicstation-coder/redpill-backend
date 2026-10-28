// express js framework:
// introduction to express js
// express js ek npm package hai
// this is framework
// manages everything from recivieng the request and giving the response
// setting up a basic express application
const express = require('express');
const app = express()
const port = 3000

// middleware
// it is in the middle of request and response
// jab bhi server request accpet krta hai waha se route ke beech pauchne tak aagr aap us request ko beech me rukte ho and kuch perform krte ho to wu element middleware kahlaata ha
app.use(function(req,res,next) {
    console.log("middleware chala");
    next(); // it is improtant to forward the request to another middleware or route.
});; // koi bhi request is server pai aaye to pahle isse chalo

// routing
// facebook.come is a route and facebook.com/blog is also a route
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('Hello World from about page!')
})

// error handling
// error handler
app.get('/profile', (req, res, next) => {
  return next(new Error("something went wrong")); // it goes to console
})
app.use(function(err,req,res,next) {
  console.log(err.stack);
  res.status(500).send("something broke"); // it goes to frontend
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})