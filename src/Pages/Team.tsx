import CoreTeam from "../Components/CoreTeam"
import Heads from "../Components/Heads"
import TeamHeading from "../Components/TeamHeading"
const Team: React.FC = () => {
  return (
    <div className=" bg-[#0D0D0D] flex flex-col ">
      <TeamHeading />
      <div >
      <Heads/>
      </div>
    </div>
  )
}

export default Team