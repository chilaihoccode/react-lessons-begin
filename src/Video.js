import video_1 from './video/Download.mp4'
import {forwardRef,useImperativeHandle,useRef } from 'react'


function Video (prop,ref) {

    const videoRef = useRef()

    useImperativeHandle(ref,() => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))


    return (
        <video 
            ref={videoRef}
            src={video_1}
            width={'60%'}
        />
    )
}

export default forwardRef(Video) 