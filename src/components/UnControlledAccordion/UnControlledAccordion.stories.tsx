import React, {useState} from 'react';
import UnControlledAccordion from './UnControlledAccordion'

export default {
    title: 'UnControlledAccordion',
    component: UnControlledAccordion,
};

// export const EmptyRating = () => <Rating value={0} onClick={x=>x} />;

export const UnControlledAcardionChange = () => {
    let [collapsed, setCollapsed] = useState(false)
    return <UnControlledAccordion titleValue={'USERS'} />
}

// <UnControledAcardionTitle onClick={setCollapsed} collapsed={collapsed} title={props.titleValue}/>