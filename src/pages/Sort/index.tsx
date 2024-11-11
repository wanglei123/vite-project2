
// 选择排序
// 不占用额外空间：原地排序
const Index = () => {
    const data = [5,65,1,2,3,4,6,77]
    const strArr = ['123123','sdfsdfsdf', '1ssrer', 'sssss']

    const chooseSort = <T,>(arr: T[]): T[] => {
        for (let i = 0; i < arr.length; i++) {
            // 选择arr[i,n)最小值的索引
            let minIndex = i
            for (let j = i; j < arr.length; j++) {
                if(arr[j] < arr[minIndex]){
                    minIndex = j
                }
            }
            // arr[i]和arr[minIndex] 交换位置
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp

        }
        return arr

    }
    return (
        <div>
            <div>选择排序：</div>
            数值型：{JSON.stringify(data)}
            结果：{JSON.stringify(chooseSort<number>(data))}
            <br />
            字符串：{JSON.stringify(strArr)}
            结果：{JSON.stringify(chooseSort<string>(strArr))}
        </div>
    );
};

export default Index;