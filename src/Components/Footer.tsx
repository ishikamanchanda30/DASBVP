function Footer() {
  return (
    <>
      <div className='flex flex-col justify-between bg-[#0D0D0D] text-white overflow-hidden' >
        <div className='mx-auto my-0 text-[8rem] text-center p-0'>
          DIGITAL ARTS SOCIETY
        </div>
        <div className='flex h-[1px] bg-white/70  min-w-screen'>
        </div>
        <div className='flex flex-row justify-between px-10 text-white py-2'>
          <div className='text-[#878787]'>
            <div>
              &#169;2025 All Rights Reserved
            </div>
          </div>
          <div className='flex flex-row justify-between gap-4 cursor-pointer '>
            <a href="/contact" className='border-r-2 border-white pr-4'>
              Contact Us
            </a>
            <a href="/cookies" className='border-r-2 border-white pr-4'>
              Cookie Policy
            </a>
            <a href="/" >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer