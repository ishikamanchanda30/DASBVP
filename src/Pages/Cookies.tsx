import Cookie from '../Components/Cookie'
function Cookies() {
  return (
    <>
      <div className='flex flex-col justify-center items-center bg-[#0D0D0D] text-white text-center min-w-screen min-h-screen py-20 gap-2'>
        <div className='text-xl font-bold'>
          Hi, you've been here for a while. Have a cookie.
        </div>
        <div>
          <Cookie/>
        </div>
        <button className='bg-black text-white px-4 py-2 rounded-md'> <a href="/"> Go Back to Home </a></button>
      </div>
    </>
  )
}

export default Cookies