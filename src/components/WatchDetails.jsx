import React from 'react'
import { useSelector } from 'react-redux'
import WatchVideoCard from './WatchVideoCard'
import RelatedVideo from './RelatedVideo'

const WatchDetails = () => {

  return (
    <div className={`h-full  w-[calc(100%-70px)] p-3 rounded-xl flex flex-col lg:flex-row gap-4 lg:justify-between lg:gap-0 overflow-y-auto`}>
        <WatchVideoCard />
        <RelatedVideo />
    </div>
  )
}

export default WatchDetails