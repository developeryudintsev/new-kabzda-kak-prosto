import React, {useState} from 'react';
import UncontrolledOnOff from './UncontrolledOnOff'

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
};

export const UncontrolledOnOffChange = () => {
    let[on,setOn]=useState(false)
    return  <UncontrolledOnOff onChange={setOn} />
}
