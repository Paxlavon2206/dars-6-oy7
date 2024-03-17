import React from 'react'
import bg from "/bgW.png"
import { Link } from 'react-router-dom'
import Pakhlavon_logo from "/hercules_logo.png"

export const Home = () => {
  return (
 
    <div>
        <div className=' relative -z-10'> <img className=' w-full' src={bg} alt="img" /></div>
       <div className='container'> 
       <div className='absolute top-[3%] flex '>
       <div className=' w-[200px] mr-[200px]'>
        <a href="/">
        <img src={Pakhlavon_logo} alt="img" />
        </a>
       </div>
       <h1 className='text-white font-extrabold text-[40px]'>7th day of Ramadan Mubarak</h1>
       </div>

      
       <div className='absolute top-[50%] right-[35%]'>
       <div className='flex items-center text-center gap-4'>
       <div className=' text-white font-bold text-[30px] leading-10'>To see the Homework</div>
       <Link to="/homework"> <button className='text-white bg-transparent px-3 py-1 border border-white underline font-bold'>Press here</button></Link>
       </div>
       </div>
       </div>
    </div>
  )
}
