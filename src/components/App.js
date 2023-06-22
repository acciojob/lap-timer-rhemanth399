import {useState,useRef} from 'react'
import React from "react";
import './../styles/App.css';

const App = () => {
  const [timer,setTimer]=useState(0)
  const [isRunning,setIsRunning]=useState(false)
  // const [isPaused,setIsPaused]=useState(false)

  let intervalRef=useRef(null)

  const startTimer=()=>{
    if(!isRunning)
    {
      setIsRunning(true)
      intervalRef.current=setInterval(()=>{
        setTimer((prevTime)=>prevTime+1)
      },10)
    }

  }
  const stopTimer=()=>{
    if(isRunning){
      setIsRunning(false)
      clearInterval(intervalRef.current);
    }
  }

  const lapTimer=()=>{
    if(isRunning)
    {
       intervalRef.current.push(timer)
       
       {
          <ul>
            <li>{intervalRef.current}</li>
          </ul>
       }
       
    }
  }
  const resetTimer=()=>{
    setTimer(0)
    setIsRunning(false)
    clearInterval(intervalRef.current)
  }

  let formartDisplay=(time)=>{
      return time<10?`0${time}`:`${time}`
  }

  return (
    <div>
      <p>{formartDisplay(Math.floor(timer/6000))}:{formartDisplay(Math.floor(timer/100)%60)}:{formartDisplay(Math.floor(timer%100))}</p>
        {/* Do not remove the main div */}
        <button type='submit' id='start' onClick={startTimer}>Start</button>
        <button type='submit' id='stop' onClick={stopTimer}>Stop</button>
        <button type='submit' id='lap'>Lap</button>
        <button type='submit' id='reset' onClick={resetTimer}>Reset</button>

    </div>
  )
}

export default App
