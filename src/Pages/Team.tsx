import CoreTeam from "../Components/CoreTeam"
import Heads from "../Components/Heads"
import Clouds from "../Components/Clouds"
const Team: React.FC = () => {
  return (
    <div className='bg-[#0D0D0D] flex flex-col'>
      <div className='min-w-screen h-[20%] bg-[#0d0d0d]'>
        <Clouds />
      </div>

      <div className='min-w-screen md:min-h-screen bg-[#0d0d0d]'>
        <CoreTeam />
      </div>

      <div className='min-w-screen bg-[#0d0d0d] md:h-[100vh] h-[330vh] '>
        <Heads />
      </div>
    </div>

  )
}

export default Team