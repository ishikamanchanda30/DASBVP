

const Heads: React.FC = () => {
  return (
    <div className="text-white w-full h-full flex flex-col justify-evenly items-center">
      <div className="flex flex-row w-90% justify-between items-center text-white">
        <span>HEADS</span>
        <span></span>
        <span>DAS</span>
      </div>

      <div className="h-[80%] w-[90%] flex-wrap">
        <div className="flex flex-col justify-end border w-[20%] h-[45%] border-box p-[2%]">
          <img className="w-full h-full"/>
          <span>Name</span>
          <span>Position</span>
        </div>
      </div>
    </div>
  )
}

export default Heads