import Reduce_Test from "@/pages/Reduce_Test";
import Effect_Test from "@/pages/Effect_Test";
import LinearSearch from "@/pages/LinearSearch";
import Sort from '@/pages/Sort'
import InsertSort from "@/pages/Sort/insertSort.tsx";
import Stack from "@/pages/Stack";

const Home = () => {
    return (
        <>
            <Reduce_Test />
            <hr/>
            <Effect_Test />
            <hr />
            <LinearSearch />
            <hr />
            <Sort />
            <hr />
            <InsertSort />
            <hr />
            <Stack />
        </>
    );
};

export default Home;