// function calculateCartPrice(num){     
//     return num;
// }

// function calculateCartPrice(...num){     // rest operator  when multiple value input
//     return num;
// }

// function calculateCartPrice(val1,...num){     // 200 goes to val1
//     return num;
// }
// console.log(calculateCartPrice(200,300,400));


//object in function===================================

// const user ={
//     username: "Bhuban",
//     price: 1999
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); //in this       method if name of key is different then it will show undefined for that we can pass directly the object instead of object storing in variable
// }
// // handleObject(user);
// // or
// handleObject({
//     username: "bhuban",
//     price: 99
// });


// array in function================================
// const myArray = [399,44,908,58]
// function returnValue(getArray){
//     return getArray[1];
// }
// console.log( returnValue(myArray));



// arrow function======================================
 



// this keyword ===========================================

// boject ------------------
// current context
// const user = {
//     username: "bhuban",
//     price:  2000,
//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome message`);
//         // here inside the  object scope so this keyword
//     }
// }

// user.welcomeMessage();

// if we have no global scope then ouside any scope this keyword contain an empty scope but in browser it give the scope window 


// in function ----------------------------------
// this. is not work on function 
// const chai = ()=> {
//     let username = 'bhuban'
//     console.log(this);
// }
// chai();

function chai() {
    let username = 'bhuban'
    console.log(this);
}
chai();
