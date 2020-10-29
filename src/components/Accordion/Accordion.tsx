import React from "react";

type ItemType = {
    title: string;
    value: any
}

type AccordionType = {
    titleValue: string,
    collapsed: boolean,
    onChange: () => void,
    items: ItemType[]
    onClick:(value:any)=>void;
}

function Accordion(props: AccordionType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} AccordionOnChange={props.onChange}/>
            {props.collapsed && <AccordionBoby items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

type AccordionTitleType = {
    title: string,
    AccordionOnChange: () => void,

}

function AccordionTitle(props: AccordionTitleType) {
    return (
        <div><h3 onClick={() => {
            props.AccordionOnChange()
        }}>{props.title}</h3></div>
    )
}

type AccordionBodyType = {
    items: ItemType[]
    onClick:(value:any)=>void;
}

function AccordionBoby(props: AccordionBodyType) {
    return (
        <div>
            <ul>
                {props.items.map((i, index) => <li
                    onClick={() => {
                        props.onClick(i.value)
                    }}>{i.title}</li>
                )}
            </ul>
        </div>
    )
}

export default Accordion;