// string interpolation     `${}`

// 2nd method of declear the string
const yourName = new String('Bhuban'); 
// console.log(typeof yourName);  // object

// console.log(yourName.__proto__);     // to see the object  // but you can access through the console

//yourName.at(index)               return letter of that index   index can be -ve
// yourName.endsWith("string", index)              index is last index-1 if no index then check till last
// yourname.includes(word) ? 'is' : 'is not'         check for the word is present or not in the sentence 


// console.log(yourName.length);
// console.log(yourName.toUpperCase()); // no change in original string because by value and store in stack
// console.log(yourName.charAt(3));
// console.log(yourName.indexOf('a'));
// console.log(yourName.indexOf('an'));

// reverse a string
// str = str.split('').reverse().join('');

//   //substring
// const newName = yourName.substring(1,3); // extact text from one string and returns a new string exculding end index
// // sigle index => start index and end is end of string
// // -ve value => consider as zero
// // end index < start index => smaller is the starting index
// console.log(newName);

//    //slice
// const anotheName = yourName.slice(-4,4); // same of above work but -ve index can present // answer is ub as last is -1  not zero
// console.log(anotheName);


const newSringOne = "      bhuban mohan       ";
console.log(newSringOne);
console.log(newSringOne.trim());
// removes whitespace from both ends of this string and returns a new string

const url = "http://bhuban.com/bhubnan%20mohan";
console.log(url.replace('%20','-'));

