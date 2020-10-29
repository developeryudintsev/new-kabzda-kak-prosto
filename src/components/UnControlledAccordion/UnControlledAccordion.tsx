import React, {useReducer} from "react";
import {reducer, TOGGEL_COLAPSED} from "./reducer";

type UnControledAcardionType = {
    titleValue: string,
}

function UnControlledAccordion(props: UnControledAcardionType) {
    // let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer,{collapsed:false})
    return (
        <div>
            <UnControledAcardionTitle onClick={()=>dispatch({type:TOGGEL_COLAPSED})}
                                      title={props.titleValue}/>
            {!state.collapsed && <UnControledAcardionBoby/>}
        </div>
    )
}

type UnControledAcardionTitleType = {
    title: string,
    onClick: () => void
}

function UnControledAcardionTitle(props: UnControledAcardionTitleType) {
    return (
        <div><h3 onClick={() => {props.onClick()}}>{props.title}</h3></div>
    )
}

function UnControledAcardionBoby() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default UnControlledAccordion;