import Child from "./child"
import {useState,useCallback,useEffect} from 'react'


function MenoCallback () {

    const [count,setCount] = useState(0)

    const handleIncrease = () => {
        setCount(prev => prev +1)
    }

    return (
        <>
            <Child onhandleIncrease={handleIncrease} />
            <h1>{count}</h1>
        </>
    )
}

export default MenoCallback