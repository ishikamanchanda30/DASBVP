import React, { useState } from 'react';
import RotatingCircle from './Circle';

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (

    <div className="w-screen h-screen bg-[#0D0D0D] text-white flex flex-row justify-between py-20 px-12 font-kumbh">
      <div className="w-1/2 flex flex-col justify-between">
        <div className="flex gap-40">
          <div>
            <h2 className="text-[44] font-[600] ">CONTACT</h2>
            <p className="text-[35]">dasbvp@gmail.com</p>
            <p className="text-[35]">9876543210</p>
          </div>
          <div>
            <h2 className="text-[44] font-[600] ">SOCIALS</h2>
            <a href="#" className="block hover:text-gray-300 transition-colors">linkedin</a>
            <a href="#" className="block hover:text-gray-300 transition-colors">instagram</a>
          </div>
        </div>

        <div className="w-[500px]">
          <div className="text-[140px] text-white font-[600] leading-none">
            DROP
          </div>
          <div className="text-[140px] text-white font-[600] leading-none text-right">
            A LINE
          </div>
        </div>
      </div>


      <div className="w-1/2 flex flex-col justify-between">
        <RotatingCircle/>
        
        <div>
          <form onSubmit={handleSubmit}>
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
    </div >

  );
};

export default Contacts; 