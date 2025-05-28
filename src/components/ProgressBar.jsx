
import '../App.css'
import { useState, useEffect } from "react";

const ProgressBar = ({value = 0}) => {  //agar kuch ni aaya toh default 0 hai 
    // console.log("value prop", value); //-> 0,1,2,3.. 100 aa rha
    const [percent, setPercent] = useState(value);  

    useEffect(()=>{    //100 se jyada na jaye value
        setPercent(Math.min(100, Math.max(value, 0)));   
    }, [value]);  //this useEffect will run whenever the value changes
                   
    // console.log('percent', percent);  //0,1,2,3,4,5,6,..100 tak
    return (
        <div className="progress">   {/* yahi bar hai */}
            <span style={{color: percent >49 ?"white": "black"}}>
                {percent.toFixed()}%
                </span>  
                   <div style= {{ width: `${percent}%`}}>    {/*for showing green content inside bar increasing with their percentage */}
                
               </div>
        </div>

);
};

export default ProgressBar;