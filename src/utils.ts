export function getById(id: number){
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log('get id ', id)
			resolve(id)
		}, 1000)
	})
}

(async function(){
	const ids = [10, 20, 30, 40, 50]
	ids.forEach(async (id) => {
		await getById(id)
	})
})()

/**
 * 检查数组是否按升序排序
 *
 * 此函数通过比较数组中相邻的元素，判断整个数组是否按照升序排列
 * 它从数组的第二个元素开始遍历，如果发现任何一对相邻元素不满足前一个元素小于等于后一个元素的条件，
 * 则认为数组没有按升序排序
 *
 * @param arr 待检查的数组
 * @returns 如果数组按升序排序，则返回true；否则返回false
 */
export const sortHelp = (arr: any[]) => {
	for (let i = 1; i < arr.length; i++){
		// 如果当前元素小于前一个元素，则数组不是升序排序
		if(arr[i-1] > arr[i]){
			return false
		}
		// 如果没有发现逆序的情况，则认为数组是升序排序
		return true
	}
}

/**
 * 交换数组中两个元素的位置
 * @param arr 数组
 * @param i 第一个元素的索引
 * @param j 第二个元素的索引
 */
export const swap = <T,>(arr: T[], i: number, j: number) => {
	[arr[i], arr[j]] = [arr[j], arr[i]];
};