const array = [1,2,3,4,5,6,7,8,9,10]

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