const array = [1,2,3,4,5,6,7,8,9,10]
    // we use filter because foreach loop don't return anything    filter is of true and false
let result = array.filter((item)=> item>3)  // return an array
// console.log(result);

// or

let ans = array.filter((item)=> (item >7))
// console.log(ans);

// or 

let answer = array.filter((item)=> {
    return item > 5
})
// here we have to specify return explicitly because of { } other wise use ()

// console.log(answer);





//================================== reduce ===============================================


const myArray = [1,2,3,4,5,6,7,8]
const initialValue = 0;
const total = myArray.reduce((accumulator, currentValue)=>{
    console.log(`accumulator: ${accumulator} , currentValue: ${currentValue}`);
    return accumulator + currentValue
},initialValue)

console.log(total) // console;