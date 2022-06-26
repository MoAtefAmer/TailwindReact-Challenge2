import React from 'react';
import Victor from './image-victor.jpg';

export default function BottomCard() {
 

  return (
    <div className=' max-w-[350px]  bg-white rounded-b-2xl break-words drop-shadow-lg shadow-md '>
      <img
        src={Victor}
        alt='ss'
        className='relative bottom-20 left-[35%]  w-28 h-28 rounded-full border-solid border-4 border-white '
      />
      <div className='flex flex-wrap flex-row justify-center gap-2 relative bottom-9 -m-3  '>
        <p className='font-Kumba  text-xl font-bold'> Victor Crest</p>
        <p className='font-Kumba  text-xl opacity-50 '>26</p>
        <p className='w-2/3 text-center opacity-50 relative right-1 bottom-2 '>
          London
        </p>
      </div>
      <div className='grid grid-cols-3 border-t-2 border-solid p-3 relative place-items-center  '>
        <div className='p-1 m-3 '>
          <p className='text-center font-Kumba  text-lg font-bold'>80K</p>
          <p className='opacity-50 text-xs font-Kumba text-center'>Followers</p>
        </div>
        <div className='p-1 m-3'>
          <p className='text-center font-Kumba  text-lg font-bold'>803K</p>
          <p className='text-center opacity-50 text-xs font-Kumba'>Likes</p>
        </div>
        <div className='p-1 m-3'>
          <p className='text-center font-Kumba  text-lg font-bold'>1.4K</p>
          <p className='text-center opacity-50 text-xs font-Kumba'>Photos</p>
        </div>
      </div>
    </div>
  );
}
