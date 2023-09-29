// array specific loop

const arr = [2,3,4,5]
// for (const element of arr) {
//     console.log(element);
// }

for (const ele in arr) {
    // console.log(ele);
}
// it returns the keys always and array has also keys

for (const key in arr) {
    // console.log(arr[key]);
}

// const str = "Bhuban"
// for (const char of str) {
//     console.log(char);
// }

//////  map    unique values  no duplication  hold key and value
const map = new Map()
map.set("In","India")
map.set("In","India")
map.set("Sk","South Korea")

// console.log(map);

for (const key of map) {
    // console.log(key);
}
// to get in arry of each element

for(const [key, value] of map){
    // console.log((key, value));
}
// only getting the value

for(const [key, value] of map){
    // console.log(`${key} => ${value}`);
}
// key and value idividually


//====================== object ============================
// for of can't iterate in object

const myObj = {
    js: 'javascript',
    cpp: 'c++'
}

for (const key in myObj) {
//    console.log(key);
}
// get all keys

for (const key in myObj) {
//    console.log(myObj[key]);
}
// for value


//================================ for each loop ======================================================

const array = ['a', 'b', 'c']
array.forEach( (item)=>{
    console.log(item);
})