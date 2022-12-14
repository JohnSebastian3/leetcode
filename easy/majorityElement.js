// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than
// ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

/**
 * @param {number[]} nums an array of numbers
 * @return {number}  a single number representing the majority element
 */
var majorityElement = function (nums) {
  const numCounts = {};
  for (const num of nums) {
    if (numCounts[num]) {
      numCounts[num]++;
    } else {
      numCounts[num] = 1;
    }
  }

  const half = Math.floor(nums.length / 2);
  for (const num in numCounts) {
    if (numCounts[num] > half) {
      return num;
    }
  }
};

console.log(majorityElement([3, 2, 3], 3));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2], 2));
