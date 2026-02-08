let personData:[string, number, boolean] = ["Vignesh", 30, true];
// personData[0] = 23; // Error: Type 'number' is not assignable to type 'string'


/*
### **Tuple vs. Array:**

Now, let's highlight the key differences between tuples and arrays:

1. **Type Consistency**:
    - Tuples have fixed lengths and each element has a specific type, so they enforce a consistent structure.
    - Arrays can have varying lengths and typically store elements of the same type, but they can store mixed types as well.
2. **Type Safety**:
    - Tuples provide strong type safety since TypeScript checks the types of elements at compile time.
    - Arrays are less strict in terms of type safety, as they allow for mixed types and dynamic resizing.
3. **Mutability**:
    - Tuples are immutable in terms of their length and element types after declaration.
    - Arrays are mutable and can be resized or modified freely.
4. **Use Cases**:
    - Tuples are often used when dealing with data that has a specific, fixed structure, such as representing coordinates, pairs of related values, or function return types with multiple values.
    - Arrays are more versatile and used for collections of data where elements may vary in type and number.
*/