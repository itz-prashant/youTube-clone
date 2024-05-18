import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { IoMdSend } from "react-icons/io";
import LiveChat from './LiveChat';
import { useDispatch } from 'react-redux';
import { setMessage } from '../Redux/Slices/liveChatSlice';
import { generateRandomName, randomMessage } from '../constant/Constant';

const RelatedVideo = () => {

  const [liveInput, setLiveInput] = useState("")
  const dispatch = useDispatch()

  useEffect(()=>{
  const timer = setInterval(() => {
      dispatch(setMessage({
        name: generateRandomName(),
        message: randomMessage(16)
      }))
    },2000);
    return (()=>{
      clearInterval(timer)
    })
  },[])

  const sendMessage = ()=>{
    dispatch(setMessage({
            name: "Prashant Gupta",
            message: liveInput
          }))
    setLiveInput("")
  }

  return (
    <div className='w-full lg:w-[35%] border border-zinc-200 rounded-xl flex flex-col'>
      <div className='flex items-center border-b border-zinc-200   p-3 justify-between'>
        <h1>Top Chat</h1>
        <BsThreeDotsVertical />
      </div>
      <div className='overflow-y-auto overflow-x-hidden h-[50vh] md:h-[60vh] lg:h-[70vh] p-3 flex flex-col-reverse'>
        <LiveChat />
      </div>
      <div className='px-3 border-t  h-[10vh] flex items-center  gap-2'>
        <span className="h-8 w-8 flex items-center justify-center cursor-pointer shrink-0 rounded-full">
            <img
              className="w-full h-full rounded-full"
              src="https://xsgames.co/randomusers/avatar.php?g=male"
              alt=""
            />
        </span>
        <div className='flex flex-col w-full'>
          <input onChange={(e)=> setLiveInput(e.target.value)} value={liveInput}
          className='h-10 outline-none px-2 w-full border rounded-3xl'
          type="text" placeholder='Chat....'/>
        </div>
        <span onClick={()=>sendMessage()}
            className="h-10 w-10 shrink-0 flex items-center justify-center cursor-pointer text-xl  rounded-full hover:bg-zinc-100 text-zinc-500">
            <IoMdSend size={22}/>
        </span>
      </div>
    </div>
  )
}

export default RelatedVideo