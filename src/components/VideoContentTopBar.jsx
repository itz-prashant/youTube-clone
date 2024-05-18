import React, { useRef, useState } from 'react'
import {topNavdata} from '../constant/Constant'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { setCategory } from '../Redux/Slices/VideoSlice';

const VideoContentTopBar = () => {

  const [active, setActive] = useState("All")
  const dispatch = useDispatch()
  const  content = useRef()

  const videoByTag = (tag)=>{
    dispatch(setCategory(tag))
    setActive(tag)
  }

  const handleScroll = (scrollOffset)=>{
    content.current.scrollLeft += scrollOffset
  }

  return (
    <div className=' flex items-center bg-white'>
        <div onClick={()=>handleScroll(-400)}
            className="h-10 w-10 sm:flex hidden shrink-0 items-center justify-center cursor-pointer text-xl rounded-full hover:bg-zinc-100 text-zinc-500">
            <IoIosArrowBack />
        </div>
        <div ref={content} style={{scrollBehavior:'smooth'}} className='overflow-x-auto p-3 hide-scrollbar  max-auto flex gap-3'>
        {topNavdata.map((data)=>(
          <button onClick={()=>videoByTag(data)} key={data}
          className={` ${active === data ? "bg-black text-white" : "bg-zinc-100"} w-fit py-2 px-3 rounded-lg flex flex-shrink-0`}>
            {data}
          </button>
        ))}
        </div>
        <div onClick={()=>handleScroll(400)}
          className="h-10 w-10 sm:flex hidden shrink-0 items-center justify-center cursor-pointer text-xl rounded-full hover:bg-zinc-100 text-zinc-500">
          <IoIosArrowForward />
        </div>
    </div>
  ) 
}

export default VideoContentTopBar