function foo(a, b) {
  // Input validation: Check if both inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Return NaN for non-numeric inputs
  }

  if (a === 0 || b === 0) {
    return 0; 
  }
  return a + b; 
}
console.log(foo(0, 1)); // Output: 0
console.log(foo(1, 0)); // Output: 0
console.log(foo(1, 1)); // Output: 2
console.log(foo('a',1)); // Output: NaN
console.log(foo(1, 'b')); // Output: NaN