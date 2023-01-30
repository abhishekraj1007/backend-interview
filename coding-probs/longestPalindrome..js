// find the longest palindrome

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Input: s = "cbbd"
// Output: "bb"

import { log } from "node:console";

const func = (s) => {
  if (s.length < 2) {
    return s;
  }
  const main = [];
  const len = s.length;

  for (let i = 0; i < len; i++) {
    let window = len - 1 - i;
    for (let j = 0; j < len - window; j++) {
      if (s[j] === s[j + window]) {
        let str = s.substring(j, j + window + 1);
        const isPalin = isPalindrome(str);
        if (isPalin) {
          main.push(str);
        }
      }
    }
  }

  return main[0];
};

function isPalindrome(s) {
  let i = 0,
    j = s.length - 1;

  while (i <= j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}

log(func("babad"));
log(func("cbbd"));
log(func("a"));
log(func("ac"));