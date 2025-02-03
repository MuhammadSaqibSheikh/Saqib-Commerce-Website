import React from 'react'
import Link from 'next/link'

const LowerHeader = () => {
  return (
    <div className='bg-slate-200 h-20'>
      <div className="flex items-center justify-between max-w-7xl h- mx-auto px-4 py-4 ">
  
  <div className="flex-shrink-0">
    <img src="/img/Logo.png" alt="Logo" className="w-28 sm:w-36" />
  </div>

  
  <div className="w-32 h-11 bg-slate-200 flex justify-between items-center px-4 rounded-sm">
    <img src="/img/buy1.png" alt="Cart Icon" className="w-6 h-6" />
   
    <button className="text-sm font-medium"><Link href="/carts">
            cart
          </Link></button>
    
    <div className="w-6 h-6 bg-slate-800 text-white text-center rounded-full">2</div>
  </div>
</div>
    </div>
  )
}

export default LowerHeader
