const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

  Ex2:
  function isAdult(age) {
    return age >= 18? 'Adult' : 'Minor';

  }
  console.log('Exercise2Result:', isAdult(21));
  console.log('Excersie2Result:', isAdult(18));

  Ex3:
  function isCharAVowel(char) {
    // Define the vowels
    const vowels = 'aeiou';
    // Check if the character is a vowel (case insensitive)
    return vowels.includes(char.toLowerCase());
}

// Test case
console.log('Exercise 3 Result:', isCharAVowel("a")); // Should log: true
console.log('Exercise 3 Result:', isCharAVowel("y")); // Should log: false

Ex4:
function generateEmail(name, domain) {
    return `${name}@${domain}`;
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

Ex5: 
function greetUser(name, timeOfDay) {
    return `Good ${timeOfDay}, ${name}!`;
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

Ex6: 
function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

Ex7: 
function calculateTip(billAmount, tipPercentage) {
    return (billAmount * tipPercentage) / 100;
}

console.log('Exercise 7 Result:', calculateTip(50, 20));

Ex8:
function convertTemperature(temperature, scale) {
    if (scale === 'C') {
        // Convert Celsius to Fahrenheit
        return (temperature * 9/5) + 32;
    } else if (scale === 'F') {
        // Convert Fahrenheit to Celsius
        return (temperature - 32) * 5/9;
    } else {
        throw new Error('Invalid scale. Use "C" for Celsius or "F" for Fahrenheit.');
    }
}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));

Ex9:
function basicCalculator(num1, num2, operation) {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 === 0) {
                throw new Error('Cannot divide by zero.');
            }
            return num1 / num2;
        default:
            throw new Error('Invalid operation. Use "add", "subtract", "multiply", or "divide".');
    }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));




