const nums = [1,2,3,4,5,6,7,8];
const part = nums.slice(2,5);
//slice e hocche start kothay theke korbe and end kothay korte hobe.
console.log(part);

const removed = nums.splice(2,5);
//splice e hocche start kothay theke korbe and koyta delete korbe.
const removed = nums.splice(2,3, 88,55,10);
console.log(removed);
console.log(nums);


const together = nums.join(" ")
console.log(together);
