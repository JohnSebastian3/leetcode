// Given an array of integers nums and an integer target, return indices of 
// the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you 
// may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

//---------- Solved on 9/2/2022 ----------

/**
 * @param {number[]} nums
 * @param {number} target
 * Input: an array of numbers and a target sum. We can assume there is only 
 * one solution
 * @return {number[]}
 * Output: array of indices of two numbers in the input array that satisfies
 * the target sum
 * 
 * @example:
 * twoSum([2,7,11,15], 18) == [1,2]
 */
 var twoSum = function(nums, target) {
    const results = [];
    // Loop through nums, each loop is checking the current number at the ith 
    // index with the rest of the numbers in the array
    for(let i = 0; i < nums.length; i++) {
        let outerNumber = nums[i];
        for(let j = i + 1; j < nums.length; j++) {
            let currentSum = outerNumber + nums[j];
            // if the ith number and the jth number create the target sum, push the value
            // of i and j into a results array
            if(currentSum == target) {
                results.push(i);
                results.push(j);
                break;
            }
        }
    }

    return results;

    // return the results array
};

// console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));