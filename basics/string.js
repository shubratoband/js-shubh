let name = "shubrato"
let repo = 4

// console.log(`first name is ${name} and my repo on github are ${repo}`);
let shubh = new String("shubrato-sb")

// console.log(shubh[0]);
// console.log(shubh.__proto__);

console.log(shubh.charAt(2));
console.log(shubh.indexOf('u'));

const cut = shubh.substring(0,4)
console.log(cut);

let newString = shubh.slice(-6,8)       // it takes the char from end and from start
console.log(newString);

let newString1 = "  Shubrato  "
console.log(newString1);
console.log(newString1.trim());

let email = "shubh12@gmail.com"

console.log(email.replace("shubh","shubratoband"));

console.log(email.includes('shubrato'));

console.log(shubh.split('-sb'));





