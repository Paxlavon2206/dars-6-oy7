import React from 'react'

export const Card = ({id, description, title}) => {
  return (
    <div className=' border-2 border-purple-600 p-4 bg-violet-300'>
        <strong >Card Number : {id}</strong>
        <h2 className='mt-2 mb-1'>{title}</h2>
        <p className='mb-6'>{description}</p>
        <button className=' bg-blue-500 px-8 py-1 rounded-xl hover:bg-blue-700 text-white font-bold w-full hover:scale-110'>Add</button>
    </div>
  )
}
