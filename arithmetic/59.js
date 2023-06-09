/**
 * @param {number} n
 * @return {boolean}
 * 
 * 「快乐数」 定义为：

对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
如果这个过程 结果为 1，那么这个数就是快乐数。
如果 n 是 快乐数 就返回 true ；不是，则返回 false 。
 */

var isHappy = function (n) {
	let result = true
	function recursion(n) {
		let temp = 0
		n = n.toString().split('')
		for (let index = 0; index < n.length; index++) {
			temp += Number(n[index]) * Number(n[index])
		}
		if (temp === 1) {
			return result
		}
		console.log(temp);
	}

	recursion(n)
}

console.log(isHappy(1));