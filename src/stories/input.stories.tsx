import React, {useRef, useState} from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

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
// export const Emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );
