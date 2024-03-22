import {memo} from 'react'

function Child ({onhandleIncrease}) {
    return (
        <>
            {console.log('re-render')}
            <h1>Helo Anh Em nhiu</h1>
            <button onClick={onhandleIncrease}>Click Me</button>
        </>
    )
}

export default memo(Child)