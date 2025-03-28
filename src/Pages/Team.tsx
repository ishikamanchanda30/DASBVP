import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap';

const coreteam=[
  {
    membername:"Vansh Gupta",
    memberpic:"src\assets\core.jpg",
    memberpostion:"President",
    memberdisc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Hiswedhuwd"
  },
  {
    membername:"Pranaya Bansal",
    memberpic:"src\assets\core.jpg",
    memberpostion:"Vice President",
    memberdisc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Hiswedhuwd"
  },
  {
    membername:"Uday Singh Pundeer",
    memberpic:"src\assets\core.jpg",
    memberpostion:"General Secretary",
    memberdisc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Hiswedhuwd"
  },
  {
    membername:"Raman",
    memberpic:"src\assets\core.jpg",
    memberpostion:"Chapter Officer",
    memberdisc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Hiswedhuwd"
  }
]

const Team: React.FC = () => {
  useGSAP(()=>{
      gsap.to('.rishi',{
        x:-300,
        duration:2,
        delay:1
      })
  })
  return (
    <> 
      <div className='w-screen h-screen bg-[#0D0D0D] text-white flex flex-row py-15 px-8 font-kumbh'> 
      <div>
        <div className='flex justify-between w-[300px] max-w-[240px] h-[160px]'>
            <div className="vertical-text text-[4rem] font-semibold text-gray-200">
              CORE
            </div>
            <div>
              <div className="size-2 bg-gray-200 mt-[0.8rem] ml-[0.14rem] rounded-full"></div>
              <div className="size-3 bg-gray-200 mt-[0.4rem] rounded-full"></div>
              <div className="w-[0.15rem] h-[6rem] bg-gray-200 ml-[0.25rem] mt-[0.7rem]"></div>
            </div>
          </div>
          <div className='w-[12rem] h-[13rem] mt-[2rem] ml-[2rem]'>
          <img src="src\assets\core.jpg" alt="" />
        </div>
        </div>
        
        <div className='rishi w-[15rem] h-[13rem] mt-[7rem] ml-[7rem]'>
          <img src="src\assets\core.jpg" alt="" />
        </div>
        <div className='w-[12rem] h-[13rem] mt-[4rem] ml-[7rem]'>
          <img src="src\assets\core.jpg" alt="" />
        </div>
        <div className='w-[12rem] h-[13rem] mt-[1rem] ml-[7rem]'>
          <img src="src\assets\core.jpg" alt="" />
        </div>
      </div>
     
    </>
  );
};

export default Team; 