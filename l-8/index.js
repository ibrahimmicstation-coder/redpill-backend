const express = require('express');
const app = express()
const port = 3000
const path = require('path')
const fs = require("fs")

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    fs.readdir(`./files`, function(err,files) {
        res.render('index', {files:files})
    })
})

app.get('/file/:filename', (req, res) => {
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function(err,filedata) {
        res.render('show', {filename:req.params.filename, filedata:filedata})
    }) // if you don't wanted to see buffer data use this "utf-8"
})

app.get('/edit/:filename', (req, res) => {
    res.render("edit", {filename:req.params.filename})
})

app.post('/edit', (req, res) => {
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`, (err)=>{
        res.redirect('/')
    })
})

app.post('/create', (req, res) => {
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err) {
        res.redirect("/") // it redirect you to homepage
    }) // split convert to array and "join" join the array
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})