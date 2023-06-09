/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
	let temp = k % nums.length
	for (let i = 0; i < temp; i++) {
		nums.unshift(nums.pop())
	}
	return nums

};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

// [5,6,7,1,2,3,4]