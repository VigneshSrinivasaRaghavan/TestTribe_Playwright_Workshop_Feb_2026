// If Block
// Syntax
// if (condition) {
//     // Code to execute if the condition is true
// }

// If-Else Block
// Syntax
// if (condition) {
//     // Code to execute if the condition is true
// } else {
//     // Code to execute if the condition is false
// }

// If-Else-If Block
// Syntax
// if (condition1) {
//     // Code to execute if condition1 is true
// } else if (condition2) {
//     // Code to execute if condition2 is true
// } else {
//     // Code to execute if both condition1 and condition2 are false
// }

let temperature = 10;
if(temperature>=35){
    console.log("It's a hot day.");
    console.log("Drink plenty of water.");
    console.log("Wear light clothing.");
}
else if(temperature>=15 && temperature<35){
    console.log("It's a pleasant day.");
    console.log("Enjoy your day.");
}
else {
    console.log("It's a cold day.");
    console.log("Wear warm clothing.");
}