function Footer() {
  return (
      <div className='w-full flex flex-col justify-between bg-[#0D0D0D] text-white overflow-hidden' >
        <div className='w-screen  md:text-[4rem] lg:text-[8rem] text-left md:text-center p-0 box-border flex flex-col justify-center gap-2 items-center'>
          <span>DIGITAL ARTS SOCIETY</span>
          <div className="w-full flex justify-center items-center lg:text-[1.2rem] md:text-[1rem] text-s gap-10">
            <span>Designer: Teena Kaintura</span>
            <span>Developers: Ishika Manchanda, Harshit Bareja </span>
          </div>
        </div>
        <div className='flex h-[1px] bg-white/70 w-full box-border'>
        </div>
        <div className='flex flex-col  md:flex-row text-center md:justify-between px-10 text-white py-2 box-border'>
          <div className='text-[#878787]'>
            <div>
              &#169;2025 All Rights Reserved
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-between gap-4 cursor-pointer text-center box-border'>
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