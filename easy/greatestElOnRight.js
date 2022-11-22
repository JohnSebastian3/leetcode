// Given an array arr, replace every element in that array with 
// the greatest element among the elements to its right, and 
// replace the last element with -1.

// After doing so, return the array.

 

// Example 1:

// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]
// Explanation: 
// - index 0 --> the greatest element to the right of index 0 is index 1 (18).
// - index 1 --> the greatest element to the right of index 1 is index 4 (6).
// - index 2 --> the greatest element to the right of index 2 is index 4 (6).
// - index 3 --> the greatest element to the right of index 3 is index 4 (6).
// - index 4 --> the greatest element to the right of index 4 is index 5 (1).
// - index 5 --> there are no elements to the right of index 5, so we put -1.
// Example 2:

// Input: arr = [400]
// Output: [-1]
// Explanation: There are no elements to the right of index 0.

/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {

  // Optimal

  let currMax = -1;
  for(let i = arr.length - 1; i >= 0; i--) {
    newMax = Math.max(currMax, arr[i]);
    arr[i] = currMax;
    currMax = newMax;
  }

  return arr;


  // Brute Force

    // for(let i = 0; i < arr.length; i++) {
    //   if(i === arr.length - 1) {
    //     arr.splice(i, 1, -1);
    //     break;
    //   }
    //   const restArr = arr.slice(i + 1);
    //   const maxValue = Math.max(...restArr);
    //   arr.splice(i, 1, maxValue);
    // }
    // return arr;
};

console.log(replaceElements([17,18,5,4,6,1]), [18,6,6,6,1,-1]);