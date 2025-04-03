import React from 'react';

const FlagshipEvent: React.FC = () => {
  const date: String = "Feb'25"

  const events = [{
    name: "UI-UX WORKSHOP",
    desc: "Lorem ipsum dolor sit amet consectetur. Turpis imperdiet amet tortor convallis consectetur vibs."
  },
  {
    name: "DESIGN COMPETITION",
    desc: "Lorem ipsum dolor sit amet consectetur. Turpis imperdiet amet tortor convallis consectetur vibs."
  }, 
  {
    name: "PHOTOWALK",
    desc: "Lorem ipsum dolor sit amet consectetur. Turpis imperdiet amet tortor convallis consectetur vibs."
  }]
  return (
    <div className='w-screen h-screen bg-[#0D0D0D] text-white font-kumbh flex flex-col justify-center items-center'>
      <div className='h-[20%] mt-18 md:mt-0 md:h-[40%]  flex flex-col justify-start items-start w-[95%]'>
        <span className='text-7xl md:text-9xl font-bold'>FLAGSHIP</span>
        <span className='text-6xl md:text-6xl font-semibold'>{date}</span>
      </div>
      <div className="h-[80%] md:h-[40%] p-5 md:p-0 flex flex-col md:flex-row w-[95%] gap-8"> {/* Parent container */}
      {events.map((event, index) => (
        <div
          key={index}
          className="group md:h-[90%] border rounded-xl flex flex-col justify-evenly items-center 
                    transition-all duration-300 flex-1 hover:flex-[1.4] 
                    bg-black text-white hover:bg-white hover:text-black"
        >
          <div className="w-[90%] h-[10%] flex justify-between items-center">
            {/* Changes color when parent is hovered */}
            <div className="h-full aspect-square bg-white rounded-full group-hover:bg-black" />
            <span className="text-lg hover:underline cursor-pointer">
              <a href="" className="group-hover:text-black">REGISTER</a>
            </span>
          </div>
          <div className="w-[90%] h-[50%] flex flex-col justify-center">
            <span className="text-2xl group-hover:font-semibold"> {event.name} </span>
            <span className="text-sm font-light"> {event.desc} </span>
          </div>
        </div>
      ))}



      </div>
    </div>
  );
};

export default FlagshipEvent; 