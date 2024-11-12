import Reduce_Test from "@/pages/Reduce_Test";
import Effect_Test from "@/pages/Effect_Test";
import LinearSearch from "@/pages/LinearSearch";
import Sort from '@/pages/Sort'
import InsertSort from "@/pages/Sort/insertSort.tsx";

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
        </>
    );
};

export default Home;