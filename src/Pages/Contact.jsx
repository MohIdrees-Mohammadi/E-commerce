import React from 'react'
import { CiMail } from "react-icons/ci";
import { PiPhoneThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";

const Contact = () => {
  return (
    <div>

      <section className=' h-65  bg-linear-to-r from-[#97223f] to-[#97223f] flex items-center justify-center px-5 lg:px-0'>
        <div className='flex flex-col items-center px-30 py-5 gap-5 '>
          <h1 className=' text-4xl md:text-6xl text-gray-200 font-serif font-bold  '>Contact Us</h1>
          <p className='text-xl text-center max-w-3xl text-gray-200 font-'>We'd love to hear from you. Get in touch with our team.</p>
        </div>
      </section>


      <section className='bg-[#f8f5f2]  w-full h-450 lg:h-250 pt-20 px-5 lg:px-0'>
        <div className=' gap-10  mx-auto h-220  grid grid-cols-1 lg:grid-cols-2 max-w-6xl '>
          <div className='w-full h-full py-5 gap-5 flex flex-col'>
            <h1 className='text-[#450817] font-serif text-3xl font-bold' >Send us a Message</h1>

            <div className=' flex flex-col gap-5'>
              <label htmlFor="name">Name *
                <input className='flex h-10 w-full rounded-md border-2 border-[#e4ded7]  focus:outline-none focus:border-[#97223f] transition-colors duration-200 bg-[#F8F5F2] px-3 py-2 mt-2  border-[#e4ded7]' id='name' type="text" placeholder='Your full name ' required />
              </label>
            </div>

            <div className=' flex flex-col gap-5'>
              <label htmlFor="email">Email *
                <input className='flex h-11 w-full rounded-md border-2 border-[#e4ded7]  focus:outline-none focus:border-[#97223f] transition-colors duration-200 bg-[#F8F5F2] px-3 py-2 mt-2  border-[#e4ded7] ' id='email' type="email" placeholder='your.email@example.com ' required />
              </label>
            </div>

            <div className=' flex flex-col gap-5'>
              <label htmlFor="subject">Subject *
                <input className='flex h-11 w-full rounded-md border-2 focus:outline-none focus:border-[#97223f] transition-colors duration-200 bg-[#F8F5F2] px-3 py-2 mt-2  border-[#e4ded7] ' id='subject' type="text" placeholder='How can we help?' required />
              </label>
            </div>

            <div className='flex flex-col gap-5'>
              <label htmlFor="message ">Message * </label>
              <textarea className='flex h-11 w-full rounded-md border-2 focus:outline-none focus:border-[#97223f] transition-colors duration-200 bg-[#F8F5F2] px-3 py-2 mt-2 h-50  border-[#e4ded7] ' id='message' type="message" placeholder='Tell us more about your inquiry... ' required />

              <button className='flex justify-center items-center h-10 w-full bg-gray-300 rounded-md  text-gray-100 h-[45px] px-3 py-2 mt-2 bg-linear-to-r from-[#97223f] to-[#97223f] cursor-pointer '>Send Message</button>

            </div>

          </div>




          <div className='w-full h-full  py-5 gap-5 flex flex-col'>

            <h1 className='text-[#450817] text-3xl font-serif font-bold'>Get in Tou</h1>
            <p className='mb-8 text-[#8A5C67] font-serif'>Have questions about our products, shipping, or custom orders? We're here to help.</p>

            <div className='w-full h-[80%] flex flex-col gap-10 mx-[-15px] lg:m-0'>

              <div className='w-full h-20 flex gap-4' >
                <div className='w-20 h-full flex justify-center'>
                  <div className='w-12 h-12  rounded-[50%] flex justify-center items-center  bg-linear-to-r from-[#97223f] to-[#97223f]'><CiMail size={30} color='white ' /></div>
                </div>
                <div>
                  <h3 className='font-semibold mb-1  font-serif'>Email</h3>
                  <p className='text-[#8A5C67] font-serif'>info@heritagethreads.com</p>
                  <p className='text-[#8A5C67] font-serif'>support@heritagethreads.com</p>
                </div>
              </div>



              <div className='w-full h-20 flex gap-4' >
                <div className='w-20 h-full  flex justify-center'>
                  <div className='w-12 h-12  rounded-[50%] flex justify-center items-center  bg-[#edbc4a]'><PiPhoneThin size={30} color='black ' /></div>
                </div>
                <div>
                  <h3 className='font-semibold mb-1 font-serif'>phone</h3>
                  <p className='text-[#8A5C67] font-serif'>+1 (555) 123-4567</p>
                  <p className='text-[#8A5C67] font-serif'>+1 (555) 987-6543</p>
                </div>
              </div>


              <div className='w-full h-20  flex gap-4' >
                <div className='w-20 h-full flex justify-center'>
                  <div className='w-12 h-12  rounded-[50%] flex justify-center items-center 
                  
                  bg-[#3fc6a4]'><CiLocationOn size={30} color='white ' /></div>
                </div>
                <div>
                  <h3 className='font-semibold mb-1  font-serif'>Address</h3>
                  <p className='text-[#8A5C67] font-serif'>123 Heritage Lane</p>
                  <p className='text-[#8A5C67] font-serif'>Cultural District, CD 12345</p>
                </div>
              </div>



              <div className='w-full h-25  flex gap-4' >
                <div className='w-20 h-full flex justify-center'>
                  <div className='w-12 h-12 rounded-[50%] flex justify-center items-center  bg-linear-to-r from-[#97223f] to-[#97223f]'><CiClock2 size={30} color='white ' /></div>
                </div>
                <div>
                  <h3 className='font-semibold mb-1 font-serif'>Business Hours</h3>
                  <p className='text-[#8A5C67] font-serif'>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className='text-[#8A5C67] font-serif'>Saturday: 10:00 AM - 4:00 PM</p>
                  <p className='text-[#8A5C67] font-serif'>Sunday: Closed</p>

                </div>
              </div>


              <div className=' mt-8 p-6 rounded-lg border  bg-[#f3eeea] border-[#e4ded7]' >

                <h3 className='font-semibold mt-2  font-serif'>Custom Orders</h3>
                <p className='text-sm text-[#8A5C67] pt-2 font-serif'>Interested in custom designs or bulk orders? Contact us directly to discuss <br /> your requirements and we'll work with our artisans to create something <br /> special for you.</p>
              </div>
            </div>








          </div>

        </div>

      </section>






    </div>
  )
}

export default Contact