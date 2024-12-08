import React from 'react'

const Button = ({option}) => {
  return (
    
      

        <div className="my-4 ">
      <button  className=" flex px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">
        {option} <img src="/img/right1.png" alt="" />
      </button>
    </div>
        
      
   
  )
}

export default Button
