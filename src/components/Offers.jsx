import React from 'react'
import { useState } from 'react';

const Offers = (props) => {
    const [isClosed, setIsClosed] = useState(false);
  return (
    <div className={`w-full bg-white rounded-sm p-2 justify-center ${isClosed ? 'hidden' : 'flex'} bounce`}>
        <p className='relative'>{props.caption}</p>
      <button className='absolute right-2 top-22' onClick={() => setIsClosed(!isClosed)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

    </div>
  )
}

export default Offers
