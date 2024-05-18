import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {API_KEY} from '../utils/fetchData'
import { BiLike } from "react-icons/bi";
import { abbreviateNumber } from 'js-abbreviation-number';

const WatchVideoCard = () => {
  const {id} = useParams()
  const [singleVideoDetail, setSingleVideoDetail] = useState()
  const [channel, setChannel] = useState()

  const fetchSingleVideo = async()=>{
    try{
        const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%20&id=${id}&key=${API_KEY}`)
        setSingleVideoDetail(res?.data?.items[0])
    }
    catch(error){
      console.log(error);
    }
  }

  const fetchChannelDetail = async()=>{
    try{
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${singleVideoDetail?.snippet?.channelId}&key=${API_KEY}`)
      setChannel(res?.data?.items[0])
  }
  catch(error){
    console.log(error);
  }
  }
  useEffect(()=>{
    fetchSingleVideo()
    fetchChannelDetail()
  },[id])

  return (
    <div className='h-full w-full lg:w-[65%] flex flex-col sm:px-3 gap-3'>
      <div className='w-full h-[300px] md:h-[350px]  flex justify-center'>
        <iframe className='rounded-xl h-full w-full object-cover max-w-[730px]' src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
        </iframe>
      </div>
      <h1 className='md:text-xl text-base font-semibold'>
        {singleVideoDetail?.snippet?.title}
      </h1>
      <div className='flex sm:justify-between sm:items-center sm:flex-row flex-col gap-3 sm:gap-0'>
        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-2'>
            <span className='w-10 h-10 rounded-full shrink-0'>
                <img className='w-10 h-10 rounded-full shrink-0'
                src={channel?.snippet?.thumbnails?.high?.url} alt="" />
            </span>
            <span className='flex flex-col'>
              <h1 className='font-medium'>{singleVideoDetail?.snippet?.channelTitle}</h1>
              <p className='text-zinc-500 text-sm'>{abbreviateNumber(channel?.statistics?.subscriberCount, 1)} subscriber</p>
            </span>
          </div>
          <button className='py-[6px] px-4 bg-black hover:bg-zinc-500 text-white rounded-3xl'>Subscribe</button>
        </div>
        <div className='flex items-center gap-2 sm:text-base text-sm'>
            <div className='flex items-center'>
              <span className='py-[6px] flex items-center gap-1 px-4 bg-zinc-100 hover:bg-zinc-200 cursor-pointer rounded-3xl font-medium'>
              <BiLike size={20}/> <p>{abbreviateNumber(singleVideoDetail?.statistics?.likeCount, 1)}</p>
              </span>
            </div>
            <span className='py-[6px] flex items-center gap-1 px-4 bg-zinc-100  hover:bg-zinc-200 cursor-pointer rounded-full font-medium'>
            {abbreviateNumber(singleVideoDetail?.statistics?.viewCount, 1)} Views
            </span>
        </div>
      </div>
    </div>
  )
}

export default WatchVideoCard