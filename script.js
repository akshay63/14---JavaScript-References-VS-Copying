/*
 **--------- Project14: Theory on copying values and referencing values ---------**
 */
// start with strings, numbers and booleans
//LEARNING: number, strings, boolean: the original variables doesn't change w.r.t its references
let num1 = 100;
let num2 = num1;
console.log(num1, num2);
num1 = 200;
console.log(num1, num2);

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const team = players;

// You might think we can just do something like this:
// team[3] = 'Lux'

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

//1) one way: using slice() method
const team2 = players.slice();
team2;

//2) or create a new array and concat the old one in
const team3 = [].concat(players);
team3;

//3) or use the new ES6 Spread
const team4 = [...players];
team4;

// now when we update it, the original one isn't changed
team4[3] = "hee haww";
team4;

//4) other way to copy arrays
const team5 = Array.from(players);
team5[3] = "HHH HHH";
players;
team5;

// The same thing goes for objects, let's say we have a person object
// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// and think we make a copy:
const captain = person;
// captain.number = 99;
person;
captain;

// how do we take a copy instead?
//1) Object.assign: first arg-empty object, second arg-object to copy from, third arg- new properties to be added or old props to be overwrite
const cap2 = Object.assign({}, person, { number: 100, age: 12 });
person;
cap2;

//2) Using object destructing - mostly used in React
const cap3 = { ...person };
cap3.name = "Luffy";
cap3.shipName = "Sunny";
person;
cap3;

//3) First converting an object ot string and then again convert it back to object(string -> object): Its a cheap trick and NOT RECOMMENDED BY WES
const cap4 = JSON.parse(JSON.stringify(person));
cap4;

// We will hopefully soon see the object ...spread

// Things to note: When we use Object.assign - it is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

//TIP: if You need to clone/copy the nested array/object then find a function online called DeepClone or use lodash's deepClone method
