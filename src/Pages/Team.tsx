import { useState } from 'react';
import CoreTeam from "../Components/CoreTeam";
import TeamLandingAnimation from "../Components/TeamLandingAnimation";

const Team: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <TeamLandingAnimation onFinish={() => setShowContent(true)} />
      
      {showContent && (
        <div className='bg-[#0D0D0D] flex flex-col'>
          <div className='min-w-screen md:min-h-screen bg-[#0d0d0d]'>
            <CoreTeam />
          </div>
        </div>
      )}
    </>
  );
};

export default Team;