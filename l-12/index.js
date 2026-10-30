// create user account
// mongoose
// schema
// model
// usercreate -> password -> hash
// jwt token -> cookie
// login -> token -> decrypt -> email

const cookieParser = require('cookie-parser');
const express = require('express');
const app = express()
const port = 3000
const path = require('path')
const bcrypt = require('bcrypt');
const userModel = require('./models/user.js');
const jwt = require('jsonwebtoken')

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/create', async (req, res) => {
  let { username, email, password, age } = req.body;
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {
      let user = await userModel.create({
        username,
        email,
        password: hash,
        age
      })
      let token = jwt.sign({ email }, "shh")
      res.cookie("token", token)
      res.send(user)
    });
  });
})

app.get("/login", (req, res) => {
  res.render('login')
})

app.post("/login", async (req, res) => {
  let user = await userModel.findOne({ email: req.body.email });
  if (!user) {
    return res.send("somthing is wrong")
  }
  bcrypt.compare(req.body.password, user.password, function (err, result) {
    if(result){
      let token = jwt.sign({ email: user.email }, "shh")
      res.cookie("token", token)
      return res.send("yes you can login")
    } else{
      res.send("something is wrong")
    }
  });
})

app.get("/logout", (req, res) => {
  res.cookie("token", "")
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})