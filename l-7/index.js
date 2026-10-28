// intialize a project with npm
// express install - npm i express
// how to get data coming from frontend at backend route
// install ejs from npm - npm i ejs

const express = require('express');
const app = express()
const port = 3000
const path = require('path')

// setting up ejs and ejs pages
// setup ejs as view engine
app.set('view engine', 'ejs')

// setting up public static files
app.use(express.static(path.join(__dirname, 'public')));

// setting up parser for form
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.render("index")
})

// dyanmic routing
// ham log kai baar kuch routes dekhte hai unmein sirf ek hi hissa change hota hai jaise ki /author/harsh and /author/ibrahim and /author/ibrahim and more like profile/codewithharry and profile/codewithibu
// sabse pahle browser par jaao
// url likhiye apna jo aapko chiaye and enter dabaiye
// ab us url route ko creat kijiye
// res bhejiye kuch bhi
// ab usi url ko agar dyanmic bnnana hai to realise kro konsa part dyanmic hai aur us part ke aage : lga do
app.get('/profile', (req, res) => {
    res.send("this is profile page")
})
app.get('/profile/:username', (req, res) => {
    // params use for read route parameters directlt from the url
    let username = req.params.username;
    res.send(`hello ${username} welcome`);
})
app.get('/profile/:username/:age', (req, res) => {
    // params use for read route parameters directlt from the url
    let username = req.params.username;
    let age = req.params.age;
    res.send(`welcome, ${username} your age is ${age}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})