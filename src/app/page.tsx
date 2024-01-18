import React from 'react'
import Image from 'next/image'
import p01 from "../../public/jalal.jpg"
const page = () => {
  return (
    <div className='bg-blue-500'>
      
        <Image className='py-5 px-5 rounded-s-2xl'
        src={p01}
        width={200}
        height={200}
        alt=''>
         </Image>
         <h1 className='text-black text-bold top-5 text-3xl'>Jalal Ahmad</h1>
         <h2 className='text-yellow-500'>staff Mentech pakistan</h2>
      </div>
    
  )
}

export default page