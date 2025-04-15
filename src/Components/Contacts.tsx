import React, { useState } from 'react';
import RotatingCircle from './Circle';
import emailjs from "emailjs-com"
const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      event.target,
      import.meta.env.VITE_EMAIL_USER_ID
    )
      .then(() => {
        console.log("Email Sent Successfully");
      })
      .catch(error => {
        console.log("Error in sending Mail", error);
      })
  }

  return (

    <div className="w-screen h-screen bg-[#0D0D0D] text-white flex flex-col justify-between py-20 px-12 font-kumbh">
      <div className="w-full flex flex-row md:justify-between ">
        <div className="w-1/2 flex flex-col md:flex-row gap-4 md:gap-40">
          <div>
            <h2 className="text-sm md:text-2xl font-[600] ">CONTACT</h2>
            <p className="text-sm md:text-lg">dasbvp@gmail.com</p>
            <p className="text-sm md:text-lg">9876543210</p>
          </div>
          <div>
            <h2 className="text-2xl font-[600] ">SOCIALS</h2>
            <a href="#" className="block hover:text-gray-300 transition-colors">linkedin</a>
            <a href="#" className="block hover:text-gray-300 transition-colors">instagram</a>
          </div>
        </div>
        <div className='w-1/2'>
          <RotatingCircle />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between ">
        <div className="w-full md:w-1/2 mt-4 md:m-10  ">
          <div className="text-7xl md:text-9xl text-white font-[600] leading-none">
            DROP
          </div>
          <div className="text-7xl md:text-9xl text-white font-[600] leading-none text-right">
            A LINE
          </div>
        </div>
        <div className="w-full md:w-1/2 m-0 mt-2 md:m-10">
          <div className='w-full'>
            <form onSubmit={submitForm}>
              <div className="mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b  border-white/20 py-2 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div className="mb-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone No"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div className="mb-6">
                <input
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-neutral-600 text-white px-8 py-2 rounded-full hover:bg-neutral-700 transition-colors">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div >

  );
};

export default Contacts; 