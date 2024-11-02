import React from 'react'

function Loading() {
  return (
    <div className='top-0 left-0 right-0 bottom-0 bg-DarkBackground bg-opacity-85 z-50 absolute flex justify-center items-center'>
      <span className="loading loading-dots loading-lg text-Primary"></span>
    </div>
  )
}

export default Loading
