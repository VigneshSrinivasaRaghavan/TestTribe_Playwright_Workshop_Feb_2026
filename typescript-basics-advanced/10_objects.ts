// Object Declaration Syntax
// let variableName = { key1: value, key2: value }
// Always key should be in string format and value can be of any data type


let person = {
name: "Vignesh",
age: 25,
isMarried: true
}

console.log(person);
console.log(person.name);

// Object Spread --> Merging two objects together using spread operator
let person2 = { name: 'Alice', age: 30 };
let contactInfo = { email: 'alice@example.com', phone: '123-456-7890' };
let mergedContact = {...person2, ...contactInfo};
console.log(mergedContact);

// Object with Type Alias (Object Template)
type PersonTemplate = {name: string, age: number, city:string, mobile: string};

let student1:PersonTemplate = {name: "Ajinkya", age: 22, city: "Pune", mobile: "1234567890"};
let student2:PersonTemplate = {name: "Kunal", age: 20, city: "Berlin", mobile: "0987654321"};
// let student3: PersonTemplate = {name: "Sara", age: 23, city: "New York"; // Error: Property 'mobile' is missing in type '{ name: string; age: number; city: string; }' but required in type 'PersonTemplate'.;