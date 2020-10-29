import React, {ChangeEvent, useRef, useState} from 'react';
import { action } from '@storybook/addon-actions';

export default {
  title: 'input',
  // component: input,
};

export const Text = () => <input/>;
export const ControlledInputWithFixedValue = () => <input value={'yo'}/>;
export const TrackValueOfUncontrolledInput = () => {
    const  [value,setvalue]=useState()
    return  <><input onChange={(e)=>{setvalue(e.currentTarget.value)}}/>-{value}</>
};
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value,setValue]=useState('');
    const inputRef=useRef<HTMLInputElement>(null) ;

    let save=()=>{
        const element=inputRef.current as HTMLInputElement
        setValue(element.value)
    }

    return <><input ref={inputRef} /><button onClick={save}>save</button>- actual value: {value}</>;

}
export const ControlledInput = () => {
    let [parentValue,setParentValue]=useState('')
return <input value={parentValue} onChange={(e)=>setParentValue(e.currentTarget.value)}/>
}


export const ControlledSelected = () => {
    let [parentValue,setParentValue]=useState<string|undefined>('2');

    const onChangeset=(e:ChangeEvent<HTMLInputElement>)=>{
setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} >
        <option >None</option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Kiev</option>
    </select>
}
// export const Emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );
