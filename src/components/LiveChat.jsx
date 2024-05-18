
import ChatMessage from './ChatMessage'
import { useSelector } from 'react-redux'

const LiveChat = () => {
  const data = useSelector(state=> state.chat.message)

  return (
    <div className='px-2'>
      <div className='flex flex-col gap-2'>
        {data && data.map((item, index)=>(
          <ChatMessage key={index} item={item}/>
        ))}
      </div>
    </div>
  )
}

export default LiveChat