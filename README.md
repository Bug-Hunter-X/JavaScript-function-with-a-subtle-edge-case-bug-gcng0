# JavaScript Function with a Subtle Edge Case Bug

This repository demonstrates a common yet easily overlooked bug in JavaScript function handling of edge cases, specifically when dealing with zero values as function inputs.

The `bug.js` file contains a function `foo` that aims to add two numbers.  The function intends to return 0 if either input is 0.  This works for simple use cases, but there's a problem with how it handles non-numeric input.

The `bugSolution.js` file presents a corrected version that addresses these shortcomings.

## Bug Details

The initial implementation incorrectly handles non-numeric inputs and shows how the conditional check may not be inclusive enough to prevent errors. 

## Solution

The solution improves the function's robustness by adding input validation using `typeof` and introducing a more comprehensive error handling using explicit `return NaN` when necessary. The corrected implementation can effectively handle both numeric and non-numeric inputs and provide a more comprehensive error-handling mechanism.

## How to Run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred JavaScript editor or IDE.
3. Run the JavaScript files using Node.js or a similar environment.  You can execute each file individually, observing the different outputs and error-handling behaviors.

This example highlights the importance of comprehensive input validation and detailed error handling in functions to prevent unexpected behavior and improve overall code reliability.