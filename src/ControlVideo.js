import Video from './Video'
import { useRef } from 'react'

function ControlVideo () {
    const videoRef = useRef()


    const handlePlay = () => {
        videoRef.current.play()
    }
    const handlePause = () => {
        videoRef.current.pause()
    }

    return (
        <div style={{padding : 20}}>
            <h1>Test</h1>
            <Video ref={videoRef} />
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    )
}

export default ControlVideo