// Arithmetic Operators
let a = 10;
let b = 5;
let sum = a + b; // Addition
let subtraction = a - b; // Subtraction
let multiplication = a * b; // Multiplication
let division = a / b; // Division // Quotioent as the output
let modulus = a % b; // Modulus // Remainder as the output

let firsName = "John";
let lastName = "Doe";
let fullName = firsName + " " + lastName; // String Concatenation

// Comparison Operators
// Always the output of the comparison operators is boolean (true or false)

let x = 10;
let y = 20;

let isEqual = x==y; // Not Strict Equality (==) - compares values only // False
let isEqualStrict = x===y; // Strict Equality (===) - compares values and types // False
let isNotEqual = x!=y; // Not Strict Inequality (!=) - compares values only // True
let isNotEqualStrict = x!==y; // Strict Inequality (!==) - compares values and types // True
let isGreaterThan = x>y; // Greater Than (>) // False
let isLessThan = x<y; // Less Than (<) // True
let isGreaterThanOrEqual = x>=y; // Greater Than or Equal To (>=) // False
let isLessThanOrEqual = x<=y; // Less Than or Equal To (<=) // True

// Logical Operators
let p = true;
let q = false;
let andResult = p && q; // Logical AND (&&) - true if both operands are true // False
let orResult = p || q;  // Logical OR (||) - true if at least one operand is true // True
let notP = !p; // Logical NOT (!) - true if operand is false // False
let notQ = !q; // Logical NOT (!) - true if operand is false // True

// Assignment Operators --> Combination of arithmetic and assignment
let num = 10;
// num = num + 5; // num is now 15
num += 5; // num is now 15 (Addition Assignment)
num -= 3; // num is now 12 (Subtraction Assignment)
num *= 2; // num is now 24 (Multiplication Assignment)
num /= 4; // num is now 6 (Division Assignment)
num %= 4; // num is now 2 (Modulus Assignment)

// Ternary Operator
// Saves the variables based on the condition
// Syntax condition ? valueIfTrue : valueIfFalse;
let age = 20;
let canVote = age>=18 ? "Yes" : "No"