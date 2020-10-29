import React, {useState} from "react";

export default {
    title: 'useState',
}

function generateData(){
    return 100200;
}

export const Example1 = () => {
    let [counter, setCounter] = useState(generateData);
    const changer=(state:number)=>{
        return state+1
    }
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
        </div>
    )
}

