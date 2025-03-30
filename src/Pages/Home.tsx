import DASabout from '../assets/DASabout.png';

function Home() {
  return (
    <div className="w-screen h-screen bg-[#0D0D0D] text-white font-kumbh relative overflow-hidden">
      
      <div className='absolute w-[50%] h-[40%] top-[30%] left-[25%]
      -rotate-10 leading-[1.4] 
      tracking-tighter font-semibold flex justify-center
      items-center z-5'>
          <span className='flex items-center justify-center h-full'>
            <span className='text-[27rem] translate-y-[-4%]'>D</span>
            <span className='text-[18rem] flex items-center'>A</span>
            <span className='text-[27rem] translate-y-[-4%]'>S</span>
          </span>
      </div>
      <div 
        className='absolute w-[38%] h-[36%] top-[32%] left-[31%] -rotate-3 
                  text-[22rem] leading-[1.4]  font-semibold flex justify-center items-center 
                  bg-[#0D0D0D] text-white overflow-hidden
                  [box-shadow:inset_0_0_20px_5px_rgba(255,255,255,0.3)] z-6'
      >
        <span className='rotate-5 translate-x-[-5%]'>DAS</span>
      </div>
      <div 
        className='absolute w-[20%] h-[25%] top-[37.5%] left-[40%] rotate-1
                  text-[13rem] leading-[1.4] tracking-tighter font-semibold flex justify-center items-center 
                  bg-[#0D0D0D] text-white overflow-hidden
                  [box-shadow:inset_0_0_20px_5px_rgba(255,255,255,0.3)] z-6'
      >
        <span className='rotate-4 translate-x-[-2%]'>DAS</span>
      </div>

      <div className="hidden md:block absolute top-20 right-12 w-20 h-[2px] bg-white"></div>
      <div className="hidden md:block absolute top-20 right-12 w-[2px] h-2 bg-white translate-x-[calc(100%-2px)]"></div>

      <div className="hidden md:block absolute bottom-20 left-12 w-20 h-[2px] bg-white"></div>
      <div className="hidden md:block absolute bottom-20 left-12 w-[2px] h-2 bg-white"></div>

      <div className="absolute top-20 left-12 max-w-sm text-m text-left leading-5">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </div>

      <div className="absolute bottom-20 right-12 max-w-sm text-m text-right leading-5">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </div>

      <div className="hidden md:block absolute bottom-32 left-1/2 transform -translate-x-1/2 text-center text-sm text-gray-400">
        SINCE 2017
      </div>

    </div>
  );
}

export default Home;
