import React from 'react'
import VideoContentTopBar from './VideoContentTopBar'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'


const VideoContent = () => {
  const open = useSelector(state=> state.toggle.open)

  return (
    <div className={`h-full w-[calc(100%-70px)] px-3 flex flex-col `}>
      <VideoContentTopBar />
      <VideoContainer />
    </div>
  )
}

export default VideoContent