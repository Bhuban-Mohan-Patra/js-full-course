const score =900; //number
const balance = new Number(900); //object // anothe way to declare
// run in console and see all methods in prototype
// console.log(typeof score);
// console.log(typeof balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // no of digit after decimal

//parseInt(value)
//parseFloat(value)
//isFinite(value)    retiurn in boolean
//isInteger(value)    retiurn in boolean


// const otherNumber = 23.8966;
// console.log(otherNumber.toPrecision(3));     //  return the significant value format
// const otherNumberTwo = 123.8966;
// console.log(otherNumberTwo.toPrecision(2));
// console.log(otherNumberTwo.toPrecision(3));
// console.log(otherNumberTwo.toPrecision(4));


const hundreds =  100000;
console.log(hundreds.toLocaleString('en-IN'));

// max-value , min-value, max-safe-value
// run in console 
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_VALUE);