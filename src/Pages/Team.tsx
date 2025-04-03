import CoreTeam from "../Components/CoreTeam"
import Heads from "../Components/Heads"




const Team: React.FC = () => {
  return (
    <div className="w-[100vw] h-[200vh] bg-[#0D0D0D] flex flex-col">
      <CoreTeam />
      <Heads />
    </div>
  )
}

export default Team