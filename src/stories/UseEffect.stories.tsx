import React, {useEffect, useState} from "react";
export default {
    title: 'useEffect demo',
}

export const SimpleExample = () => {

    let [counter, setCounter] = useState(1);
    console.log('SimpleExample');

    useEffect(() => {
        console.log(document.title);
        document.title = document.title + String(counter)
    },[counter])




    return (
        <div>
            Hellow,{counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    )
}
export const SetTimeoutExample = () => {
    let [counter, setCounter] = useState(1);

    // useEffect(() => {
    //     console.log(document);
    //     document.title = '+counter'
    // })
    useEffect(() => {
        setInterval(() => {
            console.log(counter);
           setCounter((state)=>state+1)
        }, 1000)
    },[counter])
    return (
        <div>
            Hellow,{counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    )
}