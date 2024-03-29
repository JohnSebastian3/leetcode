// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word 
// or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

//---------- Solved on 6/5/2022 ----------
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length !== t.length) {
    return false;
  }

  return s.split('').sort().join('') === t.split('').sort().join('');

};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
console.log(isAnagram('ab', 'a'));
console.log(isAnagram('aacc', 'ccac'));
