// import React, {useState} from 'react';
// import Accordion from './components/Accordion/Accordion'
// import './App.css';
// import Rating, {RatingValueType} from "./components/Rating/Rating";
// import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
//
// import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
// import UnConrolledRating from "./components/UnConrolledRating/UnConrolledRating";
// import OnOff from "./components/OnOff/OnOff";
// import {Select} from "./components/Select/Select";
//
// function App() {
//     let [ratingValue,setRatingValue]=useState<RatingValueType>(4);
//     let[accordionCollapsed,setAccordionCollapsed]=useState(false);
//     let[on,setOn]=useState<boolean>(false)
//     return (
//         <div>
//             {/*<Rating value={ratingValue} onClick={setRatingValue} />*/}
//             {/*<Accordion */}
//             {/*    titleValue={'MENU'} */}
//             {/*    collapsed={accordionCollapsed} */}
//             {/*    onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>*/}
//
//             <PageTitle title={' This is App component'}/>
//
//             {/*<OnOff ValueOn={on} changeOn={()=>setOn(!on)} />*/}
//
//             <UncontrolledOnOff onChange={setOn} />{on.toString()}
// <UnControlledAccordion titleValue={'USER'}/>
//             {/*<Rating value={2}/>*/}
//             {/*<Rating value={3}/>*/}
//             {/*<Rating value={4}/>*/}
//             {/*<Rating value={5}/>*/}
//
//             {/*<UnConrolledRating />*/}
//             {/*<UnConrolledRating />*/}
//             {/*<UnConrolledRating />*/}
//             {/*<UnConrolledRating />*/}
//             {/*<UnConrolledRating />*/}
//
//
//             {/*<Accordion titleValue={'MENU'} collapsed={true}/>*/}
//             {/*<Accordion titleValue={'USERS'} collapsed={false}/>*/}
//             {/*<UnControlledAccordion titleValue={'MENU'} />*/}
//             {/*<UnControlledAccordion titleValue={'USERS'} />*/}
//
//         </div>
//     );
// }
//
// type PageTitle = {
//     title: string;
// }
//
// function PageTitle(props: PageTitle) {
//     return (
//         <div>
//             <h3>This is App component</h3>
//         </div>
//     )
// }
//
//
// export default App;

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
    }, [number])
    // number = number.filter(f => f > 2);
    //
    // const addNumber = () => {
    //     let newNumber = 6;
    //     setNumber([...number, newNumber])
    // }

    const addNumber = useCallback(() => {
        let newNumber = 6;
        setNumber([...number, newNumber])
    }, [number])

    return (
        <div>
            <Component1Counter count={count}/>
            <button onClick={() => setCount(++count)}>COUNTER</button>
            <Component2Number number={UseMemo} addNumber={addNumber}/>
        </div>
    );
}

export default App;