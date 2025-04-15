
import React from 'react';

const HomeTeam: React.FC = () => {
  return (
    <> 
      <div className='w-screen h-screen bg-[#0D0D0D] text-white flex flex-row py-20 px-8 font-kumbh overflow-x-hidden relative'> 
        <div className='flex justify-between w-[300px] max-w-[240px] h-[160px] absolute -left-[-4]'>
          <div className="vertical-text text-[4rem] font-semibold text-gray-200">
            CORE
          </div>
          <div>
            <div className="size-2 bg-gray-200 mt-[0.8rem] ml-[0.14rem] rounded-full"></div>
            <div className="size-3 bg-gray-200 mt-[0.4rem] rounded-full"></div>
            <div className="w-[0.15rem] h-[6rem] bg-gray-200 ml-[0.25rem] mt-[0.7rem]"></div>
          </div>
        </div>
        <div className='flex absolute w-[45vw] justify-end mt-[1.7rem] text-[1.7rem]'>
        NAME
        </div>
        <div className='flex absolute w-[45vw] text-gray-200 justify-end mt-[32%] text-[1.3rem]'>
        POSITION
        </div>
        <div className='flex absolute w-[22rem] text-gray-100 justify-center left-[51%] bottom-[13%] text-[0.8rem]'>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Hiswedhuwd
        </div>
        <div className='flex absolute justify-center right-[6rem] bottom-[1rem] text-[3rem] font-semibold text-gray-200'>
        CORE
        </div>
        <button className='prev flex absolute justify-center items-center right-[2rem] bottom-[2.2rem] text-[1.2rem] font-semibold bg-gray-100 rounded-full w-[1.5rem] h-[1.5rem] text-neutral-800 opacity-40'>
        &gt;
        </button>
        <button className='next flex absolute justify-center items-center right-[4rem] bottom-[2.2rem] text-[1.2rem] font-semibold bg-gray-100 rounded-full w-[1.5rem] h-[1.5rem] text-neutral-800 opacity-40'>
        &lt;
        </button>

        <div className='piccontainer flex w-screen h-[70vh] justify-between'>
          <div className='pic1 max-w-[14vw] mt-[12rem] ml-[2rem]'>
            <img src="src\assets\core.jpg" alt="" />
          </div>
          <div className='pic2 max-w-[17vw] mt-[5rem] ml-[4rem]'>
            <img src="src\assets\core.jpg" alt="" />
          </div>
          <div className='pic1 max-w-[14vw] mt-[1.5rem] ml-[4rem]'>
            <img src="src\assets\core.jpg" alt="" />
          </div>
          <div className='pic1 max-w-[14vw] mr-[2rem]'>
            <img src="src\assets\core.jpg" alt="" />
          </div>
        </div>
      </div>
     
    </>
  );
};

export default HomeTeam; 