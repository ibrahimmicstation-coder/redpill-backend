const express = require('express');
const app = express()
const path = require('path')
const port = 3000
const userModel = require('./models/user.js');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/read', async (req, res) => {
  let users = await userModel.find({})
  console.log(users);

  res.render('read', { users })
})

app.post('/create', async (req, res) => {
  let user = await userModel.create({
    name: req.body.name,
    email: req.body.email,
    image: req.body.image
  });
  res.redirect('/read')
})

app.get('/delete/:userid', async (req, res) => {
  let user = await userModel.findOneAndDelete({
    _id: req.params.userid
  });
  console.log(user);
  res.redirect('/');
});

app.get('/edit/:userid', async (req, res) => {
  let user = await userModel.findOne({
    _id: req.params.userid
  })
  res.render('edit', { userid: req.params.userid, user });
});

app.post('/edit/:userid', async (req, res) => {
  let userid = req.params.userid
  let user = await userModel.findOneAndUpdate(
    { _id: userid },
    {
      name: req.body.name,
      email: req.body.email,
      image: req.body.image
    }
  ); res.redirect('/read')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})