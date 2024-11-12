import {sortHelp, swap} from "@/utils.ts";

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
            swap(arr,i,minIndex)
        }
    }
    return arr;
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