import React from 'react'

const ChatMessage = ({item}) => {

  return (
    <div className='flex items-center gap-2'>
        <div className="lg:h-6 lg:w-6 h-8 w-8 flex items-center justify-center cursor-pointer shrink-0 rounded-full">
            <img
              className="w-full h-full rounded-full"
              src="https://xsgames.co/randomusers/avatar.php?g=male"
              alt=""
            />
        </div>
        <div className='flex gap-2 lg:text-sm text-base'>
            <h1 className=' text-zinc-500'>{item.name}</h1>
            <p>{item.message}</p>
        </div>
    </div>
  )
}

export default ChatMessage