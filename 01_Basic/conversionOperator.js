
// // always check the data type for no error

// // conversion to number =========================
// let score =33;
// console.log(typeof score);   // number
// console.log(typeof (score));  //number

//  //from string
// let s1= "33";
// let n1 = Number(s1);
// console.log(n1); 
// console.log(typeof s1); //string
// console.log(typeof n1); //number

// let s2= "33avd";
// let n2 = Number(s2);
// console.log(n2); // NaN
// console.log(typeof s2); //string
// console.log(typeof n2);  //number

//  //from null
// let nu = null;
// let n3 = Number(nu);
// console.log(n3); // some time 0 and some time NaN
// console.log(typeof nu); // object
// console.log(typeof n3); // number

// //from undefined
// let un = undefined;
// let n4= Number(un);
// console.log(n4); // NaN
// console.log(typeof un); // undefined
// console.log(typeof n4); // number

// //from boolean
// let b1 = true;
// let n5 = Number(b1);
// console.log(n5); //1
// console.log(typeof b1);  // boolean
// console.log(typeof n5); // number

// let b2 = false;
// let n6 = Number(b1);
// console.log(n6); //0
// console.log(typeof b2);  // boolean
// console.log(typeof n6); // number

// // conversion to boolean ===========================
// //from number

// let nu1 = 1;
// let bo1 = Boolean(nu1); //true
// let nu2 = 2;
// let bo2 = Boolean(nu2); //true
// let nu3 = -2;
// let bo3 = Boolean(nu3); //true
// let nu0 = 0;
// let bo4 = Boolean(nu0); //false
// let nu5 = NaN;
// let bo5 = Boolean(nu5); //false
// console.table([bo1, bo2, bo3, bo4, bo5]);

// //from string
// let st1 = "hii"; //false
// let boo1 = Boolean(st1)
// let st2 = ""; //false
// let boo2 = Boolean(st2)
// console.table([boo1,boo2])

// // from null , undefined
// let nl =  null; // false
// let bul1 = Boolean(nl);
// let ud1 = undefined;  // false
// let bul2 = Boolean(ud1);
// console.table([bul1, bul2]);


//// conbersion to string ============================

// let nul = null;  'null'
// let str1 = String(nul);
// let und = undefined; 'undefined'
// let str2 = String(und);
// let na= NaN; 'NaN'
// let str3 = String(na);

// let tr= true; 'true'
// let str4 = String(tr);
// console.table([str1, str2, str3, str4]);



