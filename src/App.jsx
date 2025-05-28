import { useState } from 'react'
import './App.css'
import ProgressBar from './components/ProgressBar';
import { useEffect } from 'react';

function App() {

const [value, setValue] = useState(0);

//this useEffect only runs once,
//But the setInterval it starts keeps running

useEffect(()=>{
  setInterval(()=>{   //this will run after every 100ms
    setValue((val) => val+1);    //can't use setValue(value +1) bcz -> this value gets locked at its initial value when the useEffect runs. So if value was 0 when the component mounted, every 100ms you're doing is setValue(0 + 1), so it will stuck at 1
  },100);  // setValue((prevState) => prevState + 1) -> the recommended way to update state when the new value depends on the previous value
}, []);  //this useEffect runs only once

  return (

      <div className="App">
        {/*create progress bar -> 0 to 100 tak jata */}
       <span> Progress Bar </span>

       <ProgressBar value={value}/>  {/*ek ek krke 1,2,3,4,5,6 e 100 tak pass ho rhi value */}
  
        </div>
  );
};

export default App;
