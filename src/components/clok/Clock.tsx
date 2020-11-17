import React, {useEffect, useState} from 'react';

type PropsType={

}

export const Clock:React.FC<PropsType>=()=>{
    let [date,setDate]=useState(new Date())

    useEffect(()=>{
        let setInterValId=setInterval(()=>{setDate(new Date())},1000)

        return ()=>{clearInterval(setInterValId)}
    },[])
    let get2digitsString=(number:any)=>number<10?'0'+number:number;

    return <div>
        <span>{get2digitsString(date.getHours)}</span>:
        <span>{get2digitsString(date.getMinutes)}</span>:
        <span>{get2digitsString(date.getSeconds)}</span>
    </div>
}