import React, { useState } from 'react'
import {navData} from '../constant/Constant'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../Redux/Slices/VideoSlice'
import { useNavigate } from 'react-router-dom'


const Sidebar = () => {
  const open = useSelector(state=> state.toggle.open)
  const [active , setActive] = useState("Home")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSidebar = (name)=>{
    dispatch(setCategory(name))
    setActive(name)
    navigate("/")
  }
 
  return (
    <div className={`${open ? "w-[230px]": "w-[70px] "} absolute left-0 z-10 h-[90vh] overflow-y-auto p-3 custom-scroll bg-white transition-all  duration-300`}>
      {navData?.map((nav)=>(
        <div className='relative' key={nav.name}>
          {nav.title && open && <h1 className='text-xl mt-2 mb-2'>Explore</h1> }
          <span onClick={()=>handleSidebar(nav.name)} className={`flex p-2 items-center text-xl gap-5 hover:bg-zinc-100 ${active === nav.name && "bg-zinc-300"} cursor-pointer rounded-lg`}>
          {nav.icon}
         {open && <h1 className='font-medium text-base'>{nav.name}</h1>}
          </span>
          {nav.divider && <hr className='mt-3'/> }
        </div>
      ))}
      {open && <div className='text-zinc-400 font-medium p-1 text-sm'>
        Clone By: Prashant Gupta
      </div>}
    </div>
  )
}

export default Sidebar