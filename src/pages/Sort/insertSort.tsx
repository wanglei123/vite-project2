import {sortHelp} from "@/utils.ts";

const Index = () => {
    const data = [5,65,1,2,3,4,6,77]
    const strArr = ['123123','sdfsdfsdf', '1ssrer', 'sssss']



     /**
      * 插入排序算法
      * @param arr 输入数组
      * @returns 排序后的数组
      */
     const chooseSort = <T extends number | string>(arr: T[]): T[] => {
         if (!Array.isArray(arr)) {
             throw new Error('Input must be an array');
         }
         if (!arr.every(item => typeof item === 'number' || typeof item === 'string')) {
             throw new Error('Array elements must be of type number or string');
         }
         for (let i = 1; i < arr.length; i++) {
             const key = arr[i];
             let j = i - 1;
             // 将大于key的元素向后移动
             while (j >= 0 && arr[j] > key) {
                 arr[j + 1] = arr[j];
                 j--;
             }
             // 插入key到正确位置
             arr[j + 1] = key;
         }
         return arr;
     }



    return (
        <div>
            <div>插入排序：</div>
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