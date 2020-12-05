import React, {useEffect, useState} from 'react';
import {DigitealClockView} from './DigitealClock';
import {AnalogClockView} from "./AnalogClock";

type PropsType={
mode?:'analog'|'digital'
}

export const Clock:React.FC<PropsType>=(props)=>{
    let [date,setDate]=useState(new Date())

    useEffect(()=>{
        let setInterValId=setInterval(()=>{setDate(new Date())},1000)

        return ()=>{clearInterval(setInterValId)}
    },[])

    let view;
    switch (props.mode) {
        case "analog":
            view=<AnalogClockView date={date}/>
            break
        case "digital":
        default:
            view=<DigitealClockView date={date}/>
    }

    return <div>
        {view}
    {/*    {props.mode==='digital'? <>*/}
    {/*        <span>{get2digitsString(date.getHours())}</span>:*/}
    {/*    <span>{get2digitsString(date.getMinutes())}</span>:*/}
    {/*    <span>{get2digitsString(date.getSeconds())}</span>*/}
    {/*</>:<> <p>Analog</p></>*/}
    {/*        }*/}
    </div>
}

export type ClockViewPropsType={
    date:Date
}


