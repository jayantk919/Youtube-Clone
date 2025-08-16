import React from 'react'
import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { GoHistory } from "react-icons/go";
import { CgPlayListSearch } from "react-icons/cg";
import { GoVideo } from "react-icons/go";
import { SiSemanticscholar } from "react-icons/si";
import { LuClock } from "react-icons/lu";
import { AiOutlineLike } from "react-icons/ai";
import { LiaDownloadSolid } from "react-icons/lia";
import Card from './Card';
import { videoData } from '../videosData';












const LeftNav = () => {



  return (
    <div className='w-[100%] h-full  flex bg-[#0F0F0F]'>
    <div className='w-[15%] mt-[4.2%] text-white flex flex-col gap-2 '>
        <div className='flex px-7 py-1.5 items-center gap-5 bg-zinc-500 rounded-md'>
            <div><MdHome size={30}/></div>
            <h1>Home</h1>
        </div>
        <div className='flex px-7 py-1.5 items-center gap-5 rounded-md'>
            <div><SiYoutubeshorts size={25}/></div>
            <h1>Shorts</h1>
        </div>
         <div className='flex px-7 py-1.5 items-center gap-5 rounded-md'>
            <div><MdOutlineSubscriptions size={25}/></div>
            <h1>Subscriptions</h1>
        </div>
        <hr />
         <div className='flex px-7 py-1.5 items-center gap-5 rounded-md'>
            <h1>You</h1>
            <div><IoIosArrowForward size={25}/></div>
        </div>
        <div className='flex px-7 py-1.5 items-center gap-5 rounded-md'>
            <div><GoHistory size={25}/></div>
            <h1>History</h1>
        </div>
        <div className='flex px-7 py-1.5 items-center gap-5 rounded-md'>
            <div><CgPlayListSearch size={25}/></div>
            <h1>Playlists</h1>
        </div>
        <div className='flex px-7 py-1.5 items-center gap-5 rounded-md'>
            <div><GoVideo size={25}/></div>
            <h1>Your Videos</h1>
        </div>
        <div className='flex px-7 py-1.5 items-center gap-5 rounded-md'>
            <div><SiSemanticscholar size={25}/></div>
            <h1>Your Courses</h1>
        </div>
        <div className='flex px-7 py-1.5 items-center gap-5 rounded-md'>
            <div><LuClock size={25}/></div>
            <h1>Watch Later</h1>
        </div>
        <div className='flex px-7 py-1.5 items-center gap-5 rounded-md'>
            <div><AiOutlineLike size={25}/></div>
            <h1>Liked Videos</h1>
        </div>
        <div className='flex px-7 py-1.5 items-center gap-5 rounded-md'>
            <div><LiaDownloadSolid size={25}/></div>
            <h1>Downloads</h1>
        </div>
        <hr />
            <div className='flex px-7 items-center gap-5 rounded-md'>
            <h1>Subscriptions</h1>
        </div>
         <div className='flex px-7 py-1.5 items-center gap-5 rounded-md'>
            <div><img className='w-[30px] h-[30px] rounded-full' src="https://yt3.googleusercontent.com/t8z86Svc4diX-k6VHCZ7AY0EFgVin91qLZigPwJLnavVaB0YPa0etWa-c7bG1BUEcbB4U4im=s160-c-k-c0x00ffffff-no-rj" alt="" /></div>
            <h1 className='text-nowrap'>Sheryians Cod...</h1>
        </div>
        <div className='flex px-7 py-1.5 items-center gap-5 rounded-md'>
            <div><img className='w-[30px] h-[30px] rounded-full' src="https://yt3.ggpht.com/HCv0fXFEEcD0HRyF0_qR1K7b7qO3KCzmIoyH1DEJYB94CIUFhIE5i2t2IDIPX97W1-DK4hegww=s176-c-k-c0x00ffffff-no-rj-mo" alt="" /></div>
            <h1 className='text-nowrap'>Programming...</h1>
        </div>
    </div>
    <div className='w-[85%] mt-[4.5%]'>
       <div className='w-full'></div>
       <div className='flex gap-3 flex-wrap px-8 py-5'>
            {videoData.map((videos, idx)=> <Card key={idx} videos={videos} />)}
       </div>
       
    </div>
    </div>
  )
}

export default LeftNav