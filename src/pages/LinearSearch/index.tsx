
const Index = () => {

    const search = <T,>(data: T[],target: T): number => {
        for (let i = 0; i < data.length; i++) {
            if(data[i] === target){
                return i
            }
        }
        return -1
    }

    return (
        <div>
            线性查找,index =
            {search([12,34,22,445,566], 445)}
            
        </div>
    );
};

export default Index;