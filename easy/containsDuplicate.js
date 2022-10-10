// Given an integer array nums, return true if any value appears 
// at least twice in the array, and return false if every element
// is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

//---------- Solved on 10/10/2022 ----------

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// E: containsDuplicate([1,2,3,1]) === true

 var containsDuplicate = function(nums) {
  const numArray = [];
  let duplicate = false;
  nums.forEach(num => {
    if(numArray.includes(num)) {
      duplicate = true;
    }
    numArray.push(num);
  })
  return duplicate;
};

console.log(containsDuplicate([1,2,3,1]));