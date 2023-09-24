// declaration  ===========================================

const myArr = [0,1,2,3,4,"hi",true];

const myArr2 = new Array(1,2,3,4,5);

//Access by indexing

// when copy in array shallow copy i.e. copy share the same reference that means chang in copy do change in main array

// Deep copy is the opposite of shallow copy


//methods ================================================

// console.log(myArr.length);

// myArr.push(78);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(-7);
// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(87));  //returns boolean
// console.log(myArr.indexOf(7));

// const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);  //string datatype

//slice -----------------------------------------
// not change in original array
// console.log("A ",myArr);
// const mna1 = myArr.slice(1,3);  //excluding end index
// console.log(mna1);     //datatype is array
// console.log("B ",myArr);

//splice --------------------------------  //change the existing array
// do change in array 
// console.log("A ",myArr);
// const mna2 = myArr.splice(1,3);  //including end index
// console.log(mna2);     //datatype is arr ay
// console.log("B ",myArr);

 

// array as a element in another array ===========================

// const marvel_heros = ["captain america", "iron main","thor"];
// const dc_heros = ["superman","batman","flash"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// console.log(dc_heros);

// or    concat --------------------------------
// const super_heros=marvel_heros.concat(dc_heros);  //returns a new array
// //join second array element as also elments not as whole array
// console.log(super_heros);

//or    spread --------------------------------
// const all_new_heros= [...marvel_heros,...dc_heros];
// console.log(all_new_heros);


// multiple array inside multiple array to single array ==============================================

// const another_array = [1,2,3,[4,5,6],7,[8,9,[4,5]]];

// const real_another_array = another_array.flat(Infinity);
// const real_another_array = another_array.flat(1);
// const real_another_array = another_array.flat(2);   //actual depth for this array
// const real_another_array = another_array.flat(3);
// console.log(real_another_array);

// check is the data is in array and convert to array ================================================

// console.log(Array.isArray("hello"));

// console.log(Array.from("hello"));

// // directly cannot convert the objects returns an empty arraywe have to specify that is the array of keys or the array of values 
// console.log(Array.from({name: "Bhuban"}));

//myltiple  to one array ------------------------------------

// let score1 = 100;
// let score2 = 200;
// let score3 = 3000;
// let score4 = [3000,354];
// let score5 = "hii";
// console.log(Array.of(score1,score2,score3,score4,score5));.
//returns a new array

