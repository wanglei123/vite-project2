import {useEffect, useRef, useState, useLayoutEffect} from "react";

export const getPromiseData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.random() * 10)
        }, 500)
    })
}

const useCalbackRef = (callback: any) => {
    const callbackRef = useRef(callback)
    useLayoutEffect(() => {
        callbackRef.current = callback
    }, [callback])
    return callbackRef
}



export const useFetch = (option: any) => {
    const [data, setData] = useState(null)
    const onSavedSuccess = useCalbackRef(option.onSuccess)


    useEffect(() => {
        console.log('useFetch useEffect')
        if(option.url){
            getPromiseData().then(res => {
                setData(res)
                onSavedSuccess.current?.()
            })
        }
    }, [option.url]);

    return {data}
}

