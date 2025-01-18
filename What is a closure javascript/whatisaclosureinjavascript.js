function createCounter() {
    let count = 0; // This variable is part of the lexical scope of createCounter.
  
    return function() { // This inner function forms a closure.
      console.log('Student Name: Mat Aisas'); // Replace 'Sok Dara' with your full name.
      count++; // It remembers and accesses the count variable from its parent's scope.
      return count;
    };
  }
  
  // Create a counter instance
  const counter = createCounter();
  
  console.log(counter()); // 1
  console.log(counter()); // 2
  console.log(counter()); // 3
  