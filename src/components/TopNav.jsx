import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa6";
import { Outlet, useNavigate } from 'react-router';




const TopNav = () => {

  let navigate = useNavigate()

  return (
    <>
    <div className='w-[100%] fixed top-0 h-[9%] backdrop-blur-[5px] flex items-center justify-between px-5'>
        <div className='flex items-center gap-5'> 
        <div className='text-white text-2xl'> <AiOutlineMenu/> </div>
        <div onClick={()=>navigate('/')} className='flex items-center'><img className='w-[45px]' src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-1024.png" alt="" /> <span className='text-xl font-bold text-white px-1'>YouTube</span><sup className='align-text-top text-white '>IN</sup></div>
        </div>
        <div>
            <div className='flex relative gap-7 items-center'>
                <input className='text-zinc-700 pl-5 w-[500px] bg-[#121212] py-1.5 border-zinc-500 border-2 rounded-full overflow-hidden' type="text" placeholder='Search' />
                <div className='absolute top-0 right-15 w-[70px] h-[41px] flex items-center justify-center rounded-r-full bg-zinc-600 text-white' ><CiSearch size={30}/></div>
                <div className='w-[40px] h-[40px] bg-zinc-700 rounded-full flex items-center justify-center text-white'><FaMicrophone size={16}/></div>
                </div>
        </div>
        <div className='flex items-center gap-5 '>
            <div className='flex items-center gap-2 bg-zinc-300 px-4 py-2 rounded-full'>
                <div><AiOutlinePlus/></div>
                <h2>Create</h2>
            </div>
            <div className='text-white'>
            <IoMdNotificationsOutline size={30}/>
            </div>
            <div className='w-[45px] h-[45px] rounded-full bg-amber-200'></div>
        </div>

    </div>
    
    </>
  )
}

export default TopNav