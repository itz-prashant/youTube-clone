import React from 'react'
import Sidebar from './Sidebar'
import VideoContent from './VideoContent'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../Redux/Slices/MenuToggleSlice'

const Feeds = () => {
  const open = useSelector(state=> state.toggle.open)
  const dispatch = useDispatch()
  return (
    <div className='h-[90vh] flex relative justify-end'>
      {open && <div onClick={()=>dispatch(toggleSidebar(!open))} className='absolute h-screen w-screen bg-black/75'>
      </div>}
      <Sidebar />
      <VideoContent />
    </div>
  )
}

export default Feeds