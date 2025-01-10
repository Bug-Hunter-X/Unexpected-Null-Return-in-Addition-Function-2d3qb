function foo(a, b) {
  // Handle null values with default values (0)
  const numA = a === null ? 0 : a;
  const numB = b === null ? 0 : b;

  //Check if input is a number or not
  if(typeof numA != 'number' || typeof numB != 'number'){
    return "Invalid Input: Input must be a number";
  }
  return numA + numB;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
console.log(foo("a", 2)); // Output: Invalid Input: Input must be a number