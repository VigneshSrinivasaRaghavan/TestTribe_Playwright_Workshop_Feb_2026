// For Loop
// Syntax
/*
for (initialization; condition; increment/decrement) {
    // Code to be executed
}
*/
for(let i=1;i<=10;i++){
    console.log(i);
}

// While Loop
// Syntax
/*
while (condition) {
    // Code to be executed
}
*/
let j = 1;
while(j<=10){
    console.log(j);
    j++;
}

// Loop control statements
// Break Statement
for(let i=1;i<=10;i++){
    if(i===5){
        break; // Exit the loop when i is 5
    }
    console.log(i);
}


// Continue Statement
for(let i=1;i<=10;i++){
    if(i===5){
        continue; // Skip the iteration when i is 5
    }
    console.log(i);
}
