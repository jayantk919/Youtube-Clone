import { Link } from "react-router"

const Card = ({videos}) => {

    
    
    
  return (
    <Link to={`/watch/${videos.id}`}>
  <div className='card w-[400px]'>
       <div className='relative w-[400px] h-[225px] bg-zinc-900 rounded-xl shrink-0 overflow-hidden '>
        <img className='w-full h-full object-cover' src={videos.thumbnail} alt="" />
        <span className='absolute bottom-3 right-3 text-white text-xs px-1 py-0.5 rounded-sm bg-neutral-900 opacity-90'>{videos.duration}</span>
       </div>
       <div className='flex pt-3 gap-2'>
        <div className='w-[40px] h-[40px] rounded-full bg-neutral-900 overflow-hidden'>
            <img className='w-full h-full object-cover' src={videos.channelLogo} alt="" />
        </div>
        <div className='w-[350px]'>
            <h1 className='font-semibold text-lg text-white '>{videos.title}</h1>
            <h2 className='text-gray-400' >{videos.channel}</h2>
            <div className='flex gap-1.5 leading-none text-gray-400'>
                <p>{videos.views} </p>
                <span> • </span>
                <p>{videos.uploaded}</p>
            </div>
            </div>
       </div>
       </div>
       </Link>
  )
}

export default Card