// data storage
// aesa kuch jaha par hum saare user ki ingo store kar sakte hai
// database
// types of database - sql - nosql
// sql - data ko ek roop mai rakhna - tabels
// no sql - mongodb
// ped hota hai concept ped naam se kuch hota hi nhi aam ka ped hota hai kuch nosql ek concept hai object ke roop mai data rakha jayega jisme
// what and why
// backend mai do server hote hai application server aur database server
// application server jo routes request and response handle krta hai database ka chod ke sab krta hai
// database server
// jisme hamare sare projects ka data store hai
// jaise ek goodam alag alag chije hoti hai
// collections wu hota hai jisme database ke project ke andar jo data hai wu kahlata hai colletions
// document wu hota hai jo collection ke andar wala data
// database  -> collections -> document
// code             | database
// mongoose.connect - database create
// model create     - collection
// CREATE code      - document

// Master CRUD Operations with MongoDB
// mongodb installation
// mongodb collection
// schema
// model
// crud
// mongoose - npm i mongoose
// we make express server to talk with mongoose server
const express = require('express');
const app = express()
const port = 3000
const userModel = require('./usermodel');
const usermodel = require('./usermodel');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// create
app.get('/create', async (req, res) => {
  let createdUser = await userModel.create({
    name: "ibrahim",
    username: "ibu",
    email: "ibu@gmail.com"
  })
  res.send(createdUser);
}) // usermodel.create ek async nature ka code hai tu wu ruk jata hai and doosre code ko chalne deta hai par agar ham async lga de parent function mai aur await usermodel.create par tu ya pahle chalega and baad mai baki code

// update
app.get('/update', async (req, res) => {
  let updateduser = await userModel.findOneAndUpdate({username: "ibu"}, {username:"ibrahimahmad"}, {new:true}) // new true se aapko apna update kiya wa user mil jayega
  res.send(updateduser);
})

// read
app.get('/read', async (req, res) => {
    // it read the all users
    let allusers = await userModel.find()
    // wanted to read one user
    let oneuser = await userModel.findOne({username:"ibrahimahmad"})
    res.send({
        allusers: allusers,
        oneuser: oneuser
    });
})

// delete
app.get('/delete', async (req, res) => {
  let deleteduser = await usermodel.findOneAndDelete({username:"ibrahimahmad"});
  res.send(deleteduser);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})