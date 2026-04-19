// 1. Reverse a String
const reverseString = (str: string): string => {
    if (str.length > 1000) {
    return "String length must be more than 1000";
  }

  
  if (str.length === 0) {
    return "";
  }

  
  if (str.length === 1) {
    return str;
  }
    return str.split('').reverse().join('');
}



// 2.Task: Print numbers from 1 to n. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; for multiples of both, print "FizzBuzz".
const fizzBuzz = (n: number): string[] | string => {
    if (n < 1 || n > 100) {
    return "n must be between 1 and 100"
  }
    let result: string[] = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString());
        }
    }
    return result;
    
}




// 3.Find the Largest Number in an Array
const findLargestNumber = (arr: number[]): number | null => {
    if (arr.length === 0) return null;
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}



// 4. Check for Palindrome
const isPalindrome = (str: string): boolean => {
    if (str.length < 1) {
    return false; 
  }
    const cleanedString = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    if (cleanedString.length === 0) {
    return true; 
  }
     const reversed = cleanedString.split('').reverse().join('');
    return cleanedString === reversed;
}
//  console.log(isPalindrome('!!!'))
// console.log(isPalindrome('hello'))




// 5.. Sum of Array Elements
const sumOfArray = (arr: number[]): number | string => {
     if (arr.length > 500) {
    return "Array size should be less than or equal to 500";
  }


  if (arr.length === 0) {
    return 0;
  }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}



// 6. Count Vowels
const countVowels = (str: string): number|string => {
    if (!/^[a-zA-Z\s]*$/.test(str)) {
    return "String must contain only English letters and spaces"
  }
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}



// 7. Factorial Calculation
const factorial = (n: number): number | string => {
     if (n < 0 || n >= 13) {
        return "Input must be a non-negative integer less than or equal to 13.";
  }
    let result = 1;

  for (let i = 1; i <= n; i++) {
    let temp = result * i;
    result = temp;
  }

  return result;
}
//  console.log(factorial(13))



// 8. Fibonacci Sequence
const fibonacci = (n: number): number[]|string => {
  
  if (n < 1) {
    return "n must be greater than or equal to 1"
  }

  
  if (n === 1) {
    return [0];
  }

  
  if (n === 2) {
    return [0, 1];
  }

  let result: number[] = [0, 1];

  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
};
//   console.log(fibonacci(4))



// 10. Find the Minimum in an Array
const findMin = (arr: number[]): number | string => {
    if (arr.length === 0) {
    return "Array cannot be empty";
  }
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
// console.log(findMin([3, 1, 5, 2]))
// console.log(findMin([1,1,1,1]))




// 11. Multiplication Table
const multiplicationTable = (n: number): string[]|string => {
    if(n < 1 || n > 100) {
    return "n must be between 1 and 100";
  }
  const result: string[] = [];

  for (let i = 1; i <= 10; i++) {
    result.push(`${n} x ${i} = ${n * i}`);
  }

  return result;
};
// console.log(multiplicationTable(101))





// 12. Check Prime Number
const isPrimeNumber = (n: number): boolean|string => {
    if(n < 1 || n > 1000) {
        return "n must be between 1 and 1000";
    }
    if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
// console.log(isPrimeNumber(29))



// 13. Remove Duplicates from a List
const removeDuplicates = (nums: number[]): number[] => {
  return [...new Set(nums)];
};
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


// 14. Convert Celsius to Fahrenheit
const celsiusToFahrenheit = (celsius: number): number => {
  return (celsius * 9) / 5 + 32;
};
//  console.log(celsiusToFahrenheit(100))
//  console.log(celsiusToFahrenheit(-10));




//  15. Count Occurrences of a Character
const countCharacter = (s: string, c: string): number => {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      count++;
    }
  }

  return count;
};
console.log(countCharacter("helllllo","l"))