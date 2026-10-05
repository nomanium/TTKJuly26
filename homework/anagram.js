// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false

function isAnagram(s, t) {
    // If lengths are different, they can't be anagrams
    if (s.length !== t.length) {
        return false;
    }

    // Count frequency of each character in both strings
    const charCount = {};
    
    // Count characters in string s
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
        console.log(`Counting char '${char}' in s:`, charCount[char]);
    }

    // Subtract character counts based on string t
    for (let char of t) {
        console.log(`Checking char '${char}' in t:`, charCount[char]);
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    // If all counts are zero, strings are anagrams
    for (let count of Object.values(charCount)) {
        console.log(`Final count for character:`, count);
        if (count !== 0) {
            return false;
        }
    }

    return true;
}
console.log(isAnagram("anagram", "nagaram")); // true
// console.log(isAnagram("aab", "abb")); // false