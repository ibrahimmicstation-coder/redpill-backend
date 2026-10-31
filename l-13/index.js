const express = require('express');
const app = express()
const userModel = require("./models/user")
const postModel = require("./models/post")
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/create', async (req, res) => {
    let user = await userModel.create({
        name: "ibrahim",
        email: "ibu@gmail.com",
        age: 14
    });
    res.send(user)
})

app.get('/post/create', async (req, res) => {
    let post = await postModel.create({
        postdata: "ibrahim is a fucking great coder",
        user: "6ae50cdc9d304ee2abe7965c",
    });

    let user = await userModel.findOne({
        _id: "6ae50cdc9d304ee2abe7965c"
    });
    user.posts.push(post._id);
    user.save(); // khud ke changes ko aapko save krna padta hai
    res.send({ post, user })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})