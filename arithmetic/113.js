// 搜索旋转排序数组
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let left = 0, right = nums.length - 1
	while (left <= right) {
		const mid = Math.floor((left + (right - left) / 2))
		if (nums[mid] === target) {
			return mid
		}
		if (nums[mid] > nums[right]) {
			if (nums[mid] > target && target >= nums[left]) {
				right = mid - 1;
			}
			else {
				left = mid + 1;
			}
		}
		else {
			if (nums[mid] < target && target <= nums[right]) {
				left = mid + 1;
			}
			else {
				right = mid - 1;
			}
		}

	}
	return -1
};
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));