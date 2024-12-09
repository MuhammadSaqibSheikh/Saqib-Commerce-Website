import React from 'react'

const LowerHeader = () => {
  return (
    <div className='bg-slate-200 h-20'>
      <div className="flex items-center justify-between max-w-7xl h- mx-auto px-4 py-4 ">
  
  <div className="flex-shrink-0">
    <img src="/img/logo.png" alt="Logo" className="w-28 sm:w-36" />
  </div>

  
  <div className="w-32 h-11 bg-slate-200 flex justify-between items-center px-4 rounded-sm">
    <img src="/img/buy1.png" alt="Cart Icon" className="w-6 h-6" />
    <button className="text-sm font-medium">Cart</button>
    <img src="/img/no.png" alt="Notification Icon" className="w-6 h-6" />
  </div>
</div>
    </div>
  )
}

export default LowerHeader
