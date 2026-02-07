// Array Litreal
// Syntax: let arrayName: type[] = [value1, value2, ...];
let fruits: string[] = ["Apple", "Banana", "Cherry"];


// Array Constuctor
// Syntax: let arrayName: type[] = new Array(value1, value2, ...);
let fruitsNew: string[] = new Array("Apple", "Banana", "Cherry");

// Accessing Array Elements
// Access all elements
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// Access specific element by index (0-based)
console.log(fruits[0]);

// Modifying Array Elements // Need to be aware of the index value of the array
fruits[2] = "Mango";
console.log(fruits);

// Array Methods
fruits.push("Orange"); // Adds "Orange" to the end of the array
console.log(fruits);

fruits.pop(); // Removes the last element ("Orange") from the array
console.log(fruits);

fruits.unshift("Strawberry"); // Adds "Strawberry" to the beginning of the array
console.log(fruits);

fruits.shift(); // Removes the first element ("Strawberry") from the array
console.log(fruits);

let number = [1, 2, 3, 4, 5, 6];
let slicedArray = number.slice(0,3);
console.log(slicedArray); // Output: [1, 2, 3]

let multipliedArray = number.map((temp)=> temp * 2);
console.log(multipliedArray); // Output: [2, 4, 6, 8, 10]

let filteredArray = number.filter((temp)=> temp % 2 === 0)
console.log(filteredArray); // Output: [2, 4]

// For each loop to iterate over array elements
fruits.forEach((temp)=> console.log(temp));