import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_KEY, YOUTUBE_VIDEO_API } from '../utils/fetchData'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setHomeVideo } from '../Redux/Slices/VideoSlice'


const VideoContainer = () => {

  const {video, category} = useSelector(state=> state.video)

  const dispatch = useDispatch()
  
  const fetchVideo = async()=>{
    try{
      const res = await axios.get(`${YOUTUBE_VIDEO_API}`)
      dispatch(setHomeVideo(res?.data?.items))
    }
    catch(err){
      console.log(err);
    }
  }

  const fetchYoutubeByCategory = async()=>{
    try{
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`)
 
      dispatch(setHomeVideo(res?.data?.items))
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    if(category === "All" || category === "Home" || category === "Subscription" ||category === "Settings" ||category === "Help" ||category === "Report History" ||category === " Send feedback"){
      fetchVideo()
    }else{
      fetchYoutubeByCategory()
    }
  },[category])

  return (
    <div className='w-full full px-3 grid grid-cols-1 overflow-y-auto overflow-x-hidden sm:grid-cols-2 lg:grid-cols-3 '>
      {
        video?.map((item)=>(
          <Link to={`/watch/${typeof item.id === "object" ? item.id.videoId : item.id}`} key={typeof item.id === "object" ? item.id.videoId : item.id}>
            <VideoCard item={item}/>
          </Link>
        ))
      }
    </div>
  )
}

export default VideoContainer