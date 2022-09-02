// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.
 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1

//---------- Solved on 9/2/2022 ----------
/**
 * @param {number} x
 * Number will be greate than or equal to -231 and less than or equal to 230
 * 
 * @return {boolean}
 * Return a boolean indicating whether the number is a palindrome or not
 * 
 * @example 
 * isPalindrome(121) === true
 */
 var isPalindrome = function(x) {
    // Return false if x is negative
    if(x < 0) {
        return false;
    }

    const number = String(x);

    // Split number up into individual digits
    const numberArr = number.split('');
    const flipped = [];

    // Push each individual digit into a new numbers array
    for(let i = numberArr.length - 1; i >= 0; i--) {
        // Flip the array
        flipped.push(numberArr[i]);
    }

    // Join the flipped array back into a new number
    const newNumber = Number(flipped.join(''));

    // Compare original number x and flipped number. If equal, return true
    // otherwise return false
    return x == newNumber ? true : false;
    
};

console.log(isPalindrome(-121));