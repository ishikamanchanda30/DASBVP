function Footer() {
  return (
    
      <div className='max-w-screen flex flex-col justify-between bg-[#0D0D0D] text-white overflow-hidden' >
        <div className='mx-auto my-0  md:text-[4rem] lg:text-[8rem] text-left md:text-center p-0'>
          DIGITAL ARTS SOCIETY
        </div>
        <div className='flex h-[1px] bg-white/70 min-w-screen'>
        </div>
        <div className='flex flex-col  md:flex-row text-center md:justify-between px-10 text-white py-2'>
          <div className='text-[#878787]'>
            <div>
              &#169;2025 All Rights Reserved
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-between gap-4 cursor-pointer text-center '>
            <a href="/contact" className='md:border-r-2 border-white md:pr-4'>
              Contact Us
            </a>
            <a href="/cookies" className='md:border-r-2 border-white md:pr-4'>
              Cookie Policy
            </a>
            <a href="/" >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    
  )
}

export default Footer