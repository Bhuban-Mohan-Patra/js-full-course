// singleton : if made by constructor ------------------------------------

// const tinderUser = new Object();
// console.log(tinderUser);

// object literals  these are singleton and like global scope------------------------------
// const mySym = Symbol("key1");

// const jsUser ={
//     name: "Bhuban",
//     "full name": "Bhuban Mohan Patra", // this can not  access by . operator
//     age: 21,
//     location: "bbsr",
//     // mySym : "mykey1"  
//     [mySym]: "mykey1", // for using like symbol  []
// }

//for restrict changes / no one can change the object value----------------------------
// Object.freeze(jsUser);


// access object
// console.log(jsUser.name);
             // you can not access symbol with symbol data type we can not access by dot operator you cannot access the key values when the key is as string and with space like       "first name": "Bhuban" (means 2 words of string in one "" with space ) for that we use bracket method

// console.log(jsUser["name"]);
// console.log(jsUser["age"]);

// symbol use in object ------------------
// console.log(jsUser.mySym);
// console.log(typeof jsUser.mySym); // string
// console.log(jsUser[mySym]);
//  console.log(jsUser);


// Add function inside an object -----------------
// jsUser.greeting = function(){
//     console.log("hello");
// }
// console.log(jsUser.greeting);  
// console.log(jsUser.greeting());

// jsUser.greeting2 = function(){
//     console.log(`hello,${this.name}`);
// }
// console.log(jsUser.greeting2);
// console.log(jsUser.greeting2());



// add value in object ----------------
// const tinderUser ={};
// tinderUser.id="123abc";
// tinderUser.name="Bhuban";
// tinderUser.isLoggedIn = false;
// // console.log(tinderUser);


//object inside object     nesting objects ---------------
// const regularUser = {
//     email: "bhuban@.com",
//     fullname:{
//         userfullname:{
//             firstname: "Bhuban",
//             lastname: "Patra"
//         }
//     }

// }

// console.log(regularUser.fullname.userfullname.firstname);


// combining of object ---------------------------------
// const obj1 ={1: "a", 2: "b"};
// const obj2 ={3: "a", 4:"b"};

// const obj3 ={
//     obj1,obj2
// }
// // console.log(obj3);
// // const obj4 = Object.assign({},obj1,obj2);
// const obj4 = {...obj1, ...obj2};  // spread object ------------------------
// console.log(obj4);

// objects in array ---------------
// from data base always we get array

// to get info of an object and its data type is array
// console.log(Object.keys(object_name));
// console.log(Object.values(object_name));
// console.log(Object.entries(object_name));


// check is value is present in object
// console.log(object_name.hasOwnProperty("value"));



// destructuring in object =========================
const  course = {
    courseName: "js",
    price: "999",
    courseType: "online"
}

// changing name and not using dot operator

const {courseName} = course;
console.log(courseName);
const {courseName : cName} = course;
console.log(cName);


// Api ===================================================

// json  = object with no name and keys are also in string
// {
//     "courseName": "js",
//     "price": "999",
//     "courseType": "online"
// }



