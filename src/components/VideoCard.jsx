import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_KEY } from '../utils/fetchData';
import { abbreviateNumber } from 'js-abbreviation-number';
import moment from 'moment';

const VideoCard = ({item, key}) => {

   const dateTime = item?.snippet?.publishedAt
   const date = new Date(dateTime)
   const utcdate = date.toISOString().split('T')[0]
   const replaceHypen = utcdate.replace(/-/g, '')

    const [ytIcon, setYtIcon] = useState()
    const fetchYoutubeByName = async()=>{
        try{
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`)
            setYtIcon(res?.data?.items[0]?.snippet?.thumbnails?.high?.url);
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        fetchYoutubeByName()
    },[])
    
  return (
    <div className='flex flex-col w-full  gap-2 cursor-pointer p-2 hover:bg-zinc-200 rounded-lg'>
        <img className='rounded-lg'
        src={item?.snippet?.thumbnails?.high?.url} alt="" />
        
        <div className='flex gap-3'>
            <span className='w-12 h-12 rounded-full shrink-0'>
                    <img className='w-12 h-12 rounded-full shrink-0'
                    src={ytIcon} alt="" />
            </span>
            <div className='flex flex-col gap-1'>
                <div>
                    <h1 className='font-medium'>{item?.snippet?.title}
                    </h1>
                </div>
                <div className='text-zinc-500 flex flex-col'>
                    <h2>{item?.snippet?.channelTitle}</h2>
                    <span className='flex items-center gap-2 text-sm'>
                        {item?.statistics?.viewCount && <p>{abbreviateNumber(item?.statistics?.viewCount, 1)} Views</p>}
                        <p>{moment(replaceHypen, "YYYYMMDD").fromNow()}</p>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VideoCard