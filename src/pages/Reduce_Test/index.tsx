import {getById} from '@/utils.ts'

const Index = () => {
    const numbers = [1,2,3,4,5]
    // 模仿includes ,从一个数组里查找某个元素，找到第一个之后就返回true
    const res = numbers.reduce((includes, value) => {
        return includes ? includes : value === 3
    } , false)

    // slice
    const sliceRes = numbers.reduce((arr: any[], value: number, index: number) => {
        return index > 0 && index < 4 ? [...arr, value] : arr
    }, [])

    // map
    const mapRes = numbers.reduce((arr: any[], value: number) => {
        return [...arr, value * 100]
    }, [])

    // promise
    const ids = [10, 20, 30]
     ids.reduce(async (promise: Promise<void>,id: number): Promise<any> => {
        await promise
        return getById(id)
    }, Promise.resolve())


    return (
        <div>
            <div>reduce函数：</div>
            <div>data: {JSON.stringify(numbers)}</div>
            <div>includes: {JSON.stringify(res)}</div>
            <div>slice(1,4): {JSON.stringify(sliceRes)}</div>
            <div>map: {JSON.stringify(mapRes)}</div>
        </div>
    );
};

export default Index;