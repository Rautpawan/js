const name = "Pawan"
const count = 22;

// console.log(name+50 + " value");

console.log(`MY name is ${name} and my age is ${count}`);

const gameName = new String(`Free Fire`);

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase())

console.log(gameName.charAt(4));
console.log(gameName.indexOf('F'));

const newString = gameName.substring(0,5);
console.log(newString);


const anotherString = gameName.slice(-4,6);
console.log(anotherString);

const anotherString1 = "    Hello    ";
console.log(anotherString1);
console.log(anotherString1.trim());

const url = "www.google.com/hitesh%20user"
console.log(url.replace("%20", "-"));
console.log(url.includes("userName"));

console.log(gameName.split(" "));