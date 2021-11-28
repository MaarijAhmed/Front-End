import { useState } from "react";
import LoadingScreen from "./loadingscreen";

const Home = () => {
let min = 0;
let sec = 0;
let miliSec = 0;
let timer;
const [allowcomp,setAllowComp] = useState(<LoadingScreen />)

function callTimer() {
    miliSec++;
    if (miliSec < 100) {
        setAllowComp(<h1>hello</h1>)
    }
    else{
        miliSec = 0;
    }
}


const  start = () =>{
    timer = setInterval(callTimer, 10);
}

const stop = () => {
    clearInterval(timer);
}

const  reset = () =>{
    stop();
    min = 0;
    sec = 0;
    miliSec = 0;
}
  return(
    
  <div>
    {start}
    {allowcomp}
  </div>
  )
}

export default Home