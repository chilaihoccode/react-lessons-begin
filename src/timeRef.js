import { useState,useEffect,useRef } from "react"


function TimeRef () {
    const [count,setCount] = useState(60)

    const timeID = useRef();
    const prevCount =  useRef();
    
    useEffect(() => {
        prevCount.current = count
    },[count])
    
    const handleStart = () => {
        timeID.current = setInterval(() => [
            setCount(prev => prev -1)
        ],1000)
        console.log('start :' + timeID.current )
    }

    const handleStop = () => {
        clearInterval(timeID.current)
        console.log('stop :' + timeID.current )
    }
    
    
    // console.log(count,prevCount.current)
    
    return (
        <div>
            <h1>Time Ref </h1>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}



export default TimeRef