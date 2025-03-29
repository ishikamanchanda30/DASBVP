import DASabout from '../assets/DASabout.png';

function Home() {
  return (
    <div className="w-screen h-screen bg-[#0D0D0D] text-white font-kumbh relative overflow-hidden">

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

      <div className='absolute bottom-40 left-1/2 transform -translate-x-1/2 '>
        <img src={DASabout} alt="DAS logo" />
      </div>

      <div className="hidden md:block absolute bottom-32 left-1/2 transform -translate-x-1/2 text-center bg-blue-500 text-sm text-gray-400">
        SINCE 2017
      </div>

    </div>
  );
}

export default Home;
