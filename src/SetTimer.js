import { useState,useEffect} from 'react'


function ClockCountDown () {
    const [countdown,setCountdown] = useState(180)
 

    useEffect(() => {
      const Timerid = setInterval(() => {
        setCountdown(prev => prev -1)
      },1000)  

      return () => clearInterval(Timerid)
    },[])

    return (
        <div>
            <h1 style={{background : '#fff'}} >ClockCountDown</h1>
            <p>{countdown}</p>
        </div>
    )
}

export default ClockCountDown