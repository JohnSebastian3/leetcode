// Given two strings ransomNote and magazine, return true
// if ransomNote can be constructed by using the letters
// from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const magazineLetterCounts = {};
  const magazineLetters = magazine.split("");
  const ransomNoteLetters = ransomNote.split("");
  let possible = true;

  for (const letter of magazineLetters) {
    magazineLetterCounts[letter] = magazineLetterCounts[letter] + 1 || 1;
  }

  for (const letter of ransomNoteLetters) {
    if (magazineLetterCounts[letter]) {
      magazineLetterCounts[letter]--;
      if (magazineLetterCounts[letter] < 0) {
        possible = false;
      }
    } else {
      possible = false;
    }
  }
  return possible;
};

console.log(canConstruct("a", "b"), false);
console.log(canConstruct("aa", "ab"), false);
console.log(canConstruct("aa", "aab"), true);
