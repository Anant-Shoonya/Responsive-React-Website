import React, { useRef } from 'react'
import './VideoPlayer.css'
import video_cllg from '../assets/campus_video.mp4'

const VideoPlayer = (props) => {

   const check = useRef();

   const closeVideo = (e)=>{
    if(check.current == e.target)
    {
        props.setMediaPlayer(false);
    }
   }

  return (
    <div className={`video-player ${props.mediaPlayer ? '' : 'hide'}`} ref={check} onClick={closeVideo}>
        <video src={video_cllg} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer