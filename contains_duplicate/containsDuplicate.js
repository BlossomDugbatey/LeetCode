// QUESTION
// {Given an integer array nums, return true if any value appears at least twice in the array, 
// and return false if every element is distinct.}

//SOLUTION
const containsDuplicate = (nums) => {
    let duplicateContainer = [];

    for (let duplicateNum = 0; duplicateNum < nums.length; duplicateNum++) {
        if (duplicateContainer[nums[duplicateNum]]) {
            return true;
        } else {
            duplicateContainer[nums[duplicateNum]] = true;
        }
    }
    return false;
}