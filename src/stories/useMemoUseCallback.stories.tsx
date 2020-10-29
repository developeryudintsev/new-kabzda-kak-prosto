// import React, {useState, useMemo, useCallback} from "react";
//
// export default {
//     title: 'useMemo',
// }
//
// export const Example1 = () => {
//     const [a, setA] = useState<number>(5)//input всегда даст строку, но нам нужна цифра
//     const [b, setB] = useState<number>(5)
//
//     let resultA=1
//     let resultB=1
//
//
//     resultA=useMemo(()=>{
//         for (let i=1;i<=a;i++){
//          resultA*=i;
//         }
//         return resultA
//     },[a])
//
//     for(let i=1;i<=a;i++){
//         resultA*=i;
//     }
//
//     for(let i=1;i<=b;i++){
//         resultB*=i;
//     }
//
//     return(
//         <div>
//             {/*поэтому здесь приводим к числу при помощи Number() или + */}
//             <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
//             <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
//             <hr/>
//             <div>Result for a:{resultA}</div>
//             <div>Result for b:{resultB}</div>
//         </div>
//     )
//
// }
//
//
//
// export const LickeUseMemo = () => {
//     const [counter, setCounter] = useState<number>(5)//input всегда даст строку, но нам нужна цифра
//     const [books,setBooks] = useState(['React'])
//
//     // const memoizedAddBook=useMemo(
//     //     ()=>{return () => {
//     //         const newUsers = [...books, 'Angular' + new Date().getTime()];
//     //         setBooks(newUsers)
//     //     }},[books]
//     // )
//
//     const memorizedAddBook=useCallback(()=>{
//         return () => {
//             const newUsers = [...books, 'Angular' + new Date().getTime()];
//             setBooks(newUsers)
//         }
//     },[books])
//
//     return(
//         <div>
//             <button onClick={()=>setCounter(counter+1)}></button>
//             {counter}
// <Book addBook={memorizedAddBook}/>
//         </div>
//     )
//
// }
//
// type BooksSecretType={addBook:()=>void}
//
// const BooksSecret = (props: BooksSecretType) => {
//     console.log('BooksSecret')
//     return (
//         <div>
//             <button onClick={()=>props.addBook}></button>
//             {/*{props.books.map((book, i) =>*/}
//             {/*    <div key={i}>{book}</div>*/}
//             {/*)}*/}
//         </div>
//     )
// }
//
// const Book=React.memo(BooksSecret)
//======================================

import React, {useCallback, useMemo, useState} from 'react';
import './App.css';

const Component1Counter = React.memo(
    (props: { count: number }) => {
        return (
            <div>
                {console.log('Component1')}
                <div>{props.count}</div>
            </div>
        )
    }
)

const Component2Number = React.memo(
    (props: { number: Array<number>, addNumber: () => void }) => {
        let number = props.number
        return (
            <div>
                {console.log('Component2')}
                <button onClick={() => props.addNumber()}>new NUMBER</button>
                {number.map(m => m)}
            </div>
        )
    }
)

function App() {
    let [count, setCount] = useState(0);
    let [number, setNumber] = useState([1, 2, 3, 4, 5]);

    // const Component2MemoNumber = React.memo(Component2Number)
    let UseMemo = useMemo(() => {
        let UseMemoValue = number.filter(f => f > 2);
        return UseMemoValue
    }, [])
    // number = number.filter(f => f > 2);

    const addNumber = () => {
        let newNumber = 6;
        setNumber([...number, newNumber])
    }

    const addNumberMemorized = useCallback(() => {
        return addNumber;
    }, [number])

    return (
        <div>
            <Component1Counter count={count}/>
            <button onClick={() => setCount(++count)}>COUNTER</button>
            <Component2Number number={UseMemo} addNumber={addNumberMemorized}/>
        </div>
    );
}

export default App;