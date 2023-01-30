import { log } from "node:console";


// https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/
// to see what other better solutions are out there.

// "abcabcbb"
// bbbbb
// pwwkew

// what is question asking ?
// longest substring without repeating character

const func = (s) => {
  const mainArray = [];

  for (let i = 0; i < s.length; i++) {
    let j = i;
    const temp = [s[j]];

    for (j = i + 1; j < s.length; j++) {
      const isExist = findInArray(temp, s[j]);

      if (isExist) {
        mainArray.push(temp);
        break;
      }
      temp.push(s[j]);
    }

    mainArray.push(temp);
  }

  log(mainArray);
  return findMaxWithinArray(mainArray);
};

const findInArray = (array, el) => {
  // return true or false based on if the element exists in that array or not

  if (typeof array === "string") {
    array = array.split("");
  }

  for (let k = 0; k < array.length; k++) {
    if (el === array[k]) {
      return true;
    }
  }

  return false;
};

const findMaxWithinArray = (arrayOfArray) => {
  let max = 0;

  for (let item of arrayOfArray) {
    max = Math.max(max, item.length);
  }

  return max;
};

// log(func("swayw"));
// log(func("abcabcbb"));
// log(func("bbbbb"));

log(func(" "));

log(func("au"));
