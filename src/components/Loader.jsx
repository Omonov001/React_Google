import React from 'react'

function Loader() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <span className='loading loading-infinity loading-xl' style={{
      width: "200px"}}></span>
    </div>
  )
}

export default Loader
