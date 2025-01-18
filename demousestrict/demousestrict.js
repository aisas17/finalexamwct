'use strict';

// First try-catch block with undefined variable 'x'
try {
  // Replace 'Sok Dara' with your full name
  console.log('Student Name: Mat Aisas');
  x = 10; // ReferenceError: x is not defined
} catch (error) {
  console.error(error.message); // Output: "x is not defined"
}

// Function demo() to show another example of 'strict mode' behavior
function demo() {
  try {
    y = 20; // ReferenceError: y is not defined
  } catch (error) {
    console.error(error.message); // Output: "y is not defined"
  }

  try {
    eval('var z = 50; delete z;'); // SyntaxError: Cannot delete variable declared with var
  } catch (error) {
    console.error(error.message); // Output: "Cannot delete property 'z' of #<Object>"
  }
}

// Call the demo function
demo();
