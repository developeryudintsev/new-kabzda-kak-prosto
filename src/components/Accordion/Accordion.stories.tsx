import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import Accordion from './Accordion'

export default {
    title: 'Accordion',
    component: Accordion,
};

// export const EmptyRating = () => <Rating value={0} onClick={x=>x} />;
let onClickCallBack=action('some item was clicketd')
export const RatingChanging = () => {
    let [accordionCollapsed, setAccordionCollapsed] = useState(false);
    return <Accordion titleValue={'MENU'} collapsed={accordionCollapsed} onChange={() => {
        setAccordionCollapsed(!accordionCollapsed)
    }}
                      items={[{title: 'Dimych', value: 1}, {title: 'Sasha', value: 2}, {
                          title: 'Sufronof',
                          value: 3
                      }, {title: 'Sveta', value: 4}]}
    onClick={(value)=>{alert(`user with Id ${value} should be happy`)}}
    />
}

// <Accordion titleValue={'MENU'} collapsed={accordionCollapsed} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>