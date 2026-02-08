// Basic Function Syntax
// function functionName() {
//     // function body
// }

function greet() {
    console.log("Hello, Student!");
}

// Call the function
greet();

// Function with Parameters
function greetPerson(name: string) {
    // console.log("Hello "+ name); // Older way of string concatenation
    console.log(`Hello ${name}`);
}

greetPerson("Alice");
greetPerson("Bob");

// Function with Return and its Type
function add(a:number, b:number): number {
    return a+b;
}
let sum = add(5,10);
console.log(sum);

// Funnction with Optional Parameters
function addOptional(a:number, b:number, c?:number){
    return a+b+(c || 0);
}
console.log(addOptional(15,10));
console.log(addOptional(15,10,10));

function studentGreet(name: string, city?: string){
    if(!city){
        console.log(`Hello ${name}`);
    }
    else {
        console.log(`Hello ${name} from ${city}`);
    }
}
studentGreet("Charlie");
studentGreet("Pratik", "New York");

// Function with Default Parameters
// Default parameter by default in nature are optional
function studentGreetDefault(name: string, city: string = "Chennai"){
 console.log(`Hello ${name} from ${city}`);
}

studentGreetDefault("Sree");
studentGreetDefault("Chhavi", "Mumbai");

// Arrow Function
// Syntax:
// const functionName = (parameters) => {
//     // function body
// }
// If there is only one statement in the function body, we can skip the curly braces and the return keyword
const addArrow = (a:number, b:number) => a+b;

console.log(addArrow(20,30));

// Arrow function vs Regular Function
// 1. Arrow function default supports the return statement, where regular function needs an explicit return statement.
// 2. If the function goal is to be a single line function then arrow function is a better choice over the regular function.