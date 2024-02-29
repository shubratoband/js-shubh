// Primitive

// 7 Types Number, String, Boolean ,Undefined, Null, BigInt,  Symbol

const score = 20 
const scoreValue = 20.5
const IsLoggedIn = true
const Temp = null
let user

const id = Symbol('07')
const anotherId = Symbol('07')

// console.log(Symbol);

//console.log(typeof score);

// console.log(id === anotherId);

//Non Primitive (Reference)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];  // Array

let myObj = {               //Object
    name: "hitesh",
    age: 22,
}

const myFunction = function(){      //Function
    console.log("Hello world");
}           

// console.log(typeof anotherId);

//************************************************************************************************************** */

//Stack (Primitive) (Call by value)        Heap(Non-Primitive)(Call by reference)

let myName = "shubrato"

let  myFriendname = myName

myFriendname = "abhi"

console.log(myFriendname);
console.log(myName);


// Example of Heap (Call by reference) 
let oneUser= {
    email : "shubratoband12@gmail.com" ,
    upi : "shubh@ybl"
}

let twoUser = oneUser

twoUser.email = "shubh@gmail.com"

console.log(oneUser.email);
console.log(twoUser.email);





