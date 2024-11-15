
const Index = () => {
    const data = '(){}[0'


    // 匹配左右括号
    const solution = (str: string) => {
        const stack: string[] = []
        const leftBracket = ['(', '{', '[']
        const rightBracket = [')', '}', ']']
        for (let i = 0; i < str.length; i++){
            const c = str.charAt(i)
            if(leftBracket.includes(c)){
                stack.push(c)
            } else {
                if(stack?.length === 0){
                    return false
                }
                const top = stack.pop() as string
                if(rightBracket.indexOf(c) !== leftBracket.indexOf(top)){
                    return false
                }
            }
        }
        return stack.length === 0

    }
    return (
        <div>
            根据stack来匹配括号: {JSON.stringify(data)}
            {JSON.stringify(solution(data))}

        </div>
    );
};

export default Index;