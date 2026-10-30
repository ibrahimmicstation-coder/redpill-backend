// Authentication & Authorization
// Authentication: user ko profile dene se pahle ye check krna hota hai ke user hai kaun 
// Authorization: user ko kin chijo ko krne ke liye permit or kin chijo ke liye nhi
// server har baar bhool jata hai ki aap kaun ho ab kyunki server bhool jata hai aap kaun ho ti har baar wu har kaam ke liye aapse puchega aap kaun ho
// cookies and session
// maine ek baar login kiya ya sign up kiya to server ke duara ke ajeeb si string save ho jayegi mere browser mai jisse mai har bhaar agar same id se browser khulu to mai login rahu
// humein kuch cheejien seekhni hai alag alag 
// i) cookie kaise set krte hai aur read krte hai
// ii) bcrypt kaise use krte hai for password encryption and decryption
// iii) jwt kya hai aur jwt mein data kaise store karin and bahar nikaalien
// jwt teen hisso se bnta hai

const cookieParser = require('cookie-parser');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express()
const port = 3000

app.use(cookieParser());

app.get('/', (req, res) => {
    res.cookie('name', "ibrahim");
    // cookie means from server to save the data in frontend
    res.send("done");
})

// yaha pai bhi cookie dikhegi ab har page pai dikhegi chipak gayi hai
app.get('/read', (req, res) => {
    console.log(req.cookies);
    res.send("read page");
})

// bcrypt
app.get('/bcrypt', (req, res) => {
    // hashed the password
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash('polo@231', salt, function (err, hash) {
            console.log(hash);
        });
    });
    // compare the password
    bcrypt.compare("polo@231", "$2b$10$7UuNFWjILhCApLIBvbAXnuuGA5bIBu3KElgenoyil5D4rS8p5IxBm", function (err, result) {
        console.log(result);
        
    });
    
    res.send("passwordddd!!!")
})

app.get("/jwt", function(req,res) {
    let token = jwt.sign({emai:"ibu@gm.com"}, "-kisi-ko-bta-mat-secret-hai-sirf-hamare-beech");
    res.cookie("token", token);
    res.send("done")
})

app.get("/jwtread", function(req,res) {
    console.log(req.cookies.token);
    // verify
    let data = jwt.verify(req.cookies.token, "shi-kisi-ko-bta-mat-secret-hai-sirf-hamare-beech");
    console.log(data);

    res.send("done")
    
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})