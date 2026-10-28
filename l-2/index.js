// node js basics:
// intro to node js
// installating node js and npm
// working with modules
// file syestem operations
// understanding http module
// node js is not proggarming lang it is technology
// node js is not framework, library
// node js is js runtime enviroment
// js se backend nhi ban sakta kyunki js ke pass wu functionlitites nhi hai jinse backend bnta hai
// ryan dahl isne socha js se backend bnna chaiye
// google chroe ka v8 engine ka code open source and ryan us code mai cheedkhani kar raha hai 
// node & npm
// working with node and npm
// npm init -> package.json
// node basic things
// working with modules

// use file syestem (fs)
const fs = require('node:fs');
// writefile
fs.writeFile("hey.txt", "hello kaise hu?", (err)=>{
    if(err) console.error(err);
    else console.log("done");
});
// appendfile
fs.appendFile("hey.txt", " sab shi yaar", (err)=>{
    if(err) console.error(err);
    else console.log("done");
});
// rename
fs.rename("hey.txt", "hello.txt", (err)=>{
    if(err) console.error(err);
    else console.log("done");
});
// copyfile
fs.copyFile("hello.txt", "./copy/chacha.txt", (err)=>{
    if(err) console.error(err);
    else console.log("done");
}); // must copy folder exist
// unlink
fs.unlink("hello.txt", (err)=>{
    if(err) console.error(err);
    else console.log("removed the file");
}); // it delete the file
// rmdir
fs.rm("./copy", {recursive: true}, (err)=>{
    if(err) console.error(err);
    else console.log("removed");
}); // it remove the blank folder