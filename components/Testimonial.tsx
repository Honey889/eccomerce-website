import React from 'react'
import Image from 'next/image'

const Testimonial = () => {
  return (
    <div className='container pt-16'>
       <h2 className='font-bold text-4xl p-2 mt-6 '>Testimonials:</h2>
      <div className=' grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>

      <div className='grid lg:grid-cols-[300px,1fr] gap-4'>
        <div className='border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0'>
          <div className='text-center flex flex-col items-center gap-1'>

            <Image 
           className='rounded-full inline-block ' 
           src="/tester.jpeg"
           width={80}
           height={80}
           alt='dp'
            />
            <h2 className='text-gray-500 font-black text-[20px]'>Olivia</h2>
            <p>Founder & Managing Director</p>

            <Image className='inline-block py-2'
            src="/comma.jpeg"
            height={50}
            width={40}
            alt='quotes'
            />
          <p className='max-w-[200px] text-gray-500'>
          Absolutely love the products I ordered! The quality is top-notch and the service was impeccable</p>
          </div>
        </div>
      </div>



      <div className='grid lg:grid-cols-[300px,1fr] gap-4'>
        <div className='border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0'>
          <div className='text-center flex flex-col items-center gap-1'>

            <Image 
           className='rounded-full inline-block' 
           src="/tester2.jpeg"
           width={80}
           height={80}
           alt='dp'
            />
            <h2 className='text-gray-500 font-black text-[20px]'>Amelia</h2>
            <p>CEO & Founder Invision</p>

            <Image className='inline-block py-2'
            src="/comma.jpeg"
            height={50}
            width={40}
            alt='quotes'
            />
          <p className='max-w-[200px] text-gray-500'>
          The items I received exceeded my expectations. Such attention to detail and craftsmanship!</p>
          </div>
        </div>
      </div>




      <div className='grid lg:grid-cols-[300px,1fr] gap-4'>
        <div className='border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0'>
          <div className='text-center flex flex-col items-center gap-1'>

            <Image 
           className='rounded-full inline-block' 
           src="/tester3.jpeg"
           width={80}
           height={80}
           alt='dp'
            />
            <h2 className='text-gray-500 font-black text-[20px]'>Sophia</h2>
            <p>Director of Sales</p>

            <Image className='inline-block py-2'
            src="/comma.jpeg"
            height={50}
            width={40}
            alt='quotes'
            />
          <p className='max-w-[200px] text-gray-500'>
          I'm constantly amazed by the unique finds on this website. It's become my go-to for gifts and personal indulgences.</p>
          </div>
        </div>
      </div>





      <div className='grid lg:grid-cols-[300px,1fr] gap-4'>
        <div className='border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0'>
          <div className='text-center flex flex-col items-center gap-1'>

            <Image 
           className='rounded-full inline-block' 
           src="/tester5.jpeg"
           width={80}
           height={80}
           alt='dp'
            />
            <h2 className='text-gray-500 font-black text-[20px]'>Evelyn</h2>
            <p>Chief Marketing Officer</p>

            <Image className='inline-block py-2'
            src="/comma.jpeg"
            height={50}
            width={40}
            alt='quotes'
            />
          <p className='max-w-[200px] text-gray-500'>
          The products here speak for themselves. Each purchase feels like a little luxury.</p>
          </div>
        </div>
      </div>









    </div>
    </div>
  )
}

export default Testimonial
