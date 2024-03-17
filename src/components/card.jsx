import React from 'react'

export const Card = ({id, description, title}) => {
  return (
    <div className=' border-2 border-purple-600 p-4 bg-violet-300'>
        <strong>Card Number : {id}</strong>
        <h2>{title}</h2>
        <p className=''>{description}</p>
        <button className=' bg-blue-500 px-8 rounded-xl hover:bg-blue-700 text-white'>Add</button>
    </div>
  )
}
