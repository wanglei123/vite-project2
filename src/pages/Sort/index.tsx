
// 选择排序
// 不占用额外空间：原地排序
const Index = () => {
    const data = [5,65,1,2,3,4,6,77]
    const strArr = ['123123','sdfsdfsdf', '1ssrer', 'sssss']

    const chooseSort = <T extends number | string>(arr: T[]): T[] => {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }

    for (let i = 0; i < arr.length; i++) {
        // 选择arr[i,n)最小值的索引
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // 只在找到最小值后进行一次交换
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

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
const sortHelp = (arr: any[]) => {
    for (let i = 1; i < arr.length; i++){
        // 如果当前元素小于前一个元素，则数组不是升序排序
        if(arr[i-1] > arr[i]){
            return false
        }
        // 如果没有发现逆序的情况，则认为数组是升序排序
        return true
    }
}


    return (
        <div>
            <div>选择排序：</div>
            数值型：{JSON.stringify(data)}
            结果：{JSON.stringify(chooseSort<number>(data))}
            <br />
            字符串：{JSON.stringify(strArr)}
            结果：{JSON.stringify(chooseSort<string>(strArr))}
            <br />
            检查排序结果：{JSON.stringify(sortHelp(chooseSort<number>(data)))}
        </div>
    );
};

export default Index;