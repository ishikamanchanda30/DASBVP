import CoreTeam from "../Components/CoreTeam"
import Heads from "../Components/Heads"
import Clouds from "../Components/Clouds"
const Team: React.FC = () => {
  return (
    <div className=" bg-[#0D0D0D] flex flex-col ">
      {/* <div className='min-h-screen min-w-screen '> */}

        <Clouds />
      {/* </div> */}
      <div className='min-h-screen min-w-screen max-h-screen max-w-screen bg-[#0d0d0d] scroll-smooth'>
        <CoreTeam/>
      </div>
      <div className='min-h-screen min-w-screen '>
        <Heads />
      </div>

    </div>
  )
}

export default Team