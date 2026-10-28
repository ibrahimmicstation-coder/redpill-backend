// understanding http module
// internet par kuch bhi krne ke liye rules bnaye gaye hai unke dwarra jinhone ne internet bnaya hai ab un rules ko follow krne jarruri hai aur ue rules follow ho isliye ye rules aap ke os ke software mein pre installed aate hai
// http - protocol
// yahi protocol hai ya rule hai jisko bina follow kre aap internet pe naa hi kuch bhej sakte ho naa hi kuch mang sakte ho

const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
// our first http server