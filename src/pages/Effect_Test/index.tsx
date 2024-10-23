import {useMemo, useState} from 'react';
import { Button, Space } from 'antd-mobile'
import {useFetch} from "@/pages/Effect_Test/useFetch.ts";

const Index = () => {
    const [url, setUrl] = useState('');
    // const myOption = useMemo(() => ({url}), [url])
    const {data} = useFetch({url, onSuccess: () => {
            console.log(222, 'onSuccess')
        }});

    console.log('app rendering')

    return (
        <div>
            <div>Hello</div>
            <div>{JSON.stringify(data)}</div>
            <Space>
                <Button onClick={() => setUrl('jack')}>jack</Button>
                <Button onClick={() => setUrl('sally')}>sally</Button>
            </Space>

        </div>
    );
};

export default Index;