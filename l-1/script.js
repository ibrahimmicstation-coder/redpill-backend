// fundamentals of javascript
// arrays and objects
// function return
// async js coding
// foreach map filter find index.of

// array
var arr = [1,2,3,4];
// foreach
arr.forEach((val)=> {
    console.log("hello the number is "+val);
})
// map
var map = arr.map((val)=>{
    return val*3;
})
console.log(map); // [3,6,9,12]
// filter
var filter = arr.filter((val)=>{
    if (val==3) {
        return true;
    } else return false;
})
console.log(filter);
// find
var find = arr.find((val)=>{
    if (val === 2) return val;
})
console.log(find);
// indexOf
// find the index of array i mean where it is located and the counting start with 0
var indexOf = arr.indexOf(1);
console.log(indexOf); // 0

// objects
// {} this is object
var obj = {
    name: "ibrahim",
    age: 14,
}
// if i wanted to access name from obj
console.log(obj.name);
console.log(obj["name"]);
// change the age from obj
obj.age = 35;
console.log(obj);
// wanted to stop the editing of object
Object.freeze(obj);

// function return
// params are also consider length
function abcd(a,b,c,d) {
    return "hello world";
}
abcd();
console.log(abcd.length()); // 4

// asynchronous js
// async js coding
// line by line code chale isse kahte hai syncchronous
// jo bhi code async nature ka ho, usey side stack main bhej do aur agle code ko chalao jo bhi sync nature ka ho , jab bhi saara sync code chal jaaye tab check kro ki async code complete hua ya nhi and agar wu complete hua ho to usse main stack mein lao and chalao
async function async() {
    var ans = await console.log("hello i am async nature code");
    console.log(ans);
}
async();