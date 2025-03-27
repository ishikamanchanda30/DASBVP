import React from 'react';

const FlagshipEvent: React.FC = () => {
  const date: String = "Feb'25"

  const events = [{
    name: "Workshop",
    desc: "Lorem ipsum dolor sit amet consectetur. Turpis imperdiet amet tortor convallis consectetur vibs."
  },
  {
    name: "UI-UX Competition",
    desc: "Lorem ipsum dolor sit amet consectetur. Turpis imperdiet amet tortor convallis consectetur vibs."
  }, {
    name: "UI-UX Competition",
    desc: "Lorem ipsum dolor sit amet consectetur. Turpis imperdiet amet tortor convallis consectetur vibs."
  }]
  return (
    <div className='w-screen h-screen bg-[#0D0D0D] text-white font-kumbh flex flex-col justify-center items-center'>
      <div className='h-[40%] flex flex-col justify-start items-start w-[95%]'>
        <span className='text-9xl font-bold'>FLAGSHIP</span>
        <span className='text-6xl font-semibold'>{date}</span>
      </div>
      <div className="h-[40%] flex w-[95%] gap-8"> {/* Parent container */}
        {events.map((event, index) => (
          <div
            key={index}
            className="h-[90%] border rounded-xl flex flex-col justify-evenly items-center 
                      transition-all duration-300 flex-1 hover:flex-[1.4]" 
            /* flex-1 = equal width, hover:flex-[1.2] = grows 20% larger */
          >
            <div className="w-[90%] h-[10%] flex justify-between items-center">
              <div className="h-full aspect-square bg-white rounded-full" />
              <span className="text-lg hover:underline cursor-pointer">REGISTER</span>
            </div>
            <div className="w-[90%] h-[50%] flex flex-col justify-center">
              <span className="text-2xl">{event.name}</span>
              <span className="text-sm font-light">{event.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlagshipEvent; 