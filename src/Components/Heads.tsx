import React from 'react'
import HeadCard from './HeadCard'
const Heads: React.FC = () => {

  return (
    <div className="text-white w-full h-full flex flex-col pt-15 items-center">
      <div className="flex flex-row w-[85%] justify-between items-center text-[#D3D3D3] text-6xl pb-10 h-[15%]">
        <span className='pr-4'>HEADS </span>
        <span className='flex w-[90%] border-1 border-[#D3D3D3]'></span>
        <span className='pl-4'>DAS</span>
      </div>
      <HeadCard />
    </div>
  )
}

export default Heads