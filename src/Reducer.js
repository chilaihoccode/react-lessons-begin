import {useState,useReducer} from 'react'

// init value 
const initState = 0;

// Action 
const UP_ACTION = 'up';
const DOWN_ACTION = 'down'
// reducer
const reducer = (state,action) => {
    console.log('running')
    switch (action) {
        case UP_ACTION:
                return state + 1
        case DOWN_ACTION:
                return state - 1
        default :
            throw new Error('invaldate')
    }
}

function ExampleReducer () {
    const [count,setCount] = useState(0)
    const [count2,dispath] = useReducer(reducer,initState)
    // function handleUp () {
    //     setCount(count +1)
    // }
    // function handleDown () {
    //     setCount(count -1)
    // }
    return (
        <>
            <h1>Reducer</h1>
            <h2>{count2}</h2>
            <button 
                // onClick={handleUp}
                onClick={() => dispath(UP_ACTION)}
            >UP
            </button>
            <button 
                // onClick={handleDown}
                onClick={() => dispath(DOWN_ACTION)}
            >DOWN
            </button>
        </>
    )
}

export default ExampleReducer