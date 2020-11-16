import React, {useState} from 'react';
import  {stateType,reducer, TOGGEL_COLAPSED} from './reducer';
test('reduser should change value to opposit value',()=>{
    //data
const  state:stateType={
    collapsed:false
}
    //action
    let newState=reducer(state,{type:TOGGEL_COLAPSED})
    //expection
    expect(newState.collapsed).toBe(false)
})