function Footer() {
  return (
    <div className='w-full flex flex-col justify-between bg-[#0D0D0D] text-white overflow-hidden' >
      <div className='flex h-[1px] bg-white/70 w-full box-border'>
      </div>
      <div className='flex flex-col  md:flex-row text-center md:justify-between px-10 text-white py-2 box-border'>

        <div className='text-[#878787]'>
          <div>
            &#169;2025 All Rights Reserved
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-xs">
          <div className="flex justify-center items-center gap-1">
            <div className="opacity-50">DESIGNED BY:</div>
            <div>TEENA KAINTURA</div>
          </div>
          <div className="flex justify-center items-center gap-1">
            <div className="opacity-50">DEVELOPED BY:</div>
            <div>HARSHIT BAREJA & ISHIKA MANCHANDA</div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-2'>
          <div className='flex flex-row justify-between md:gap-4 gap-1 cursor-pointer text-center box-border'>
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
    </div>

  )
}

export default Footer