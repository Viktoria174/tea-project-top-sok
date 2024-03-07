// Helper function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
  }
  
  // Helper function to check if a number is odd
  function isOdd(number) {
    return !isEven(number);
  }
  
  // Helper function to find the maximum of two numbers
  function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
  }
  
  // Helper function to find the minimum of two numbers
  function min(num1, num2) {
    return num1 < num2 ? num1 : num2;
  }
  
  // Example usage
  console.log(isEven(4)); // Output: true
  console.log(isOdd(5)); // Output: true
  console.log(max(10, 5)); // Output: 10
  console.log(min(3, 8)); // Output: 3
  