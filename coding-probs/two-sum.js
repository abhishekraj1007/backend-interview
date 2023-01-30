import { log } from "node:console";

// nums = [2,7,11,15], target = 9

const twoSum = (nums, target) => {
  // numsay will be a set of numbers
  // p;ick two indices from numsay which should not be the same and when the addup is equal to target

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) {
        return [i, j];
      }
    }
  }
};

log(twoSum([2, 7, 11, 15], 9));

// the abover code has the time complexity of n square


// below code has the time complexity of n
const twoSumBetter = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  let remainder;

  for (let i = 0; i < nums.length; i++) {
    remainder = target - nums[i];
    if (map.has(remainder) && i !== map.get(remainder)) {
      return [i, map.get(remainder)];
    }
  }

  return null;
};

log(twoSumBetter([2, 7, 11, 15], 9));
