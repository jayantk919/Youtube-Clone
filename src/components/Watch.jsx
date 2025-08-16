import React from 'react';
import { TfiClose } from "react-icons/tfi";
import { CiMenuKebab } from "react-icons/ci";
import { BiLike, BiDislike } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import { LiaDownloadSolid } from "react-icons/lia";
import PlaylistCards from './PlaylistCards';
import SuggestedVideos from './SuggestedVideos';
import { videoData } from '../videosData';
import { useParams } from 'react-router';

const Watch = () => {

  let {id} = useParams()

  let video = videoData.find(v => v.id == id)

  if(!video) return <div>404 - Video Not Found!</div>

    console.log(video);
    
  


  
  
  

  return (
    <div className="w-full min-h-screen bg-[#121212] pt-[4.5%] flex flex-col items-center text-white">
      
      {/* ===== Top: Player + Playlist ===== */}
      <div className="w-[85%] flex gap-4">
        
        {/* Player */}
        <div className="flex-[2] rounded-2xl overflow-hidden bg-black">
          <iframe
            allow="autoplay; encrypted-media"
            className="w-full h-full"
            src={`${video.url}&autoplay=1&mute=1`}
          ></iframe>
        </div>

        {/* Playlist */}
        <div className="flex-[1] rounded-2xl border overflow-hidden border-gray-800 flex flex-col max-h-[calc(100vh-5rem)]">
          {/* Playlist Header */}
          <div className="p-5 bg-zinc-700 flex  justify-between items-start">
            <div>
              <h1 className="text-xl font-semibold">Mix - React Tutorial for Beginners</h1>
              <p className="text-sm text-gray-300">Mixes are playlists YouTube makes for you</p>
            </div>
            <div className="flex flex-col gap-4 text-xl">
              <TfiClose />
              <CiMenuKebab />
            </div>
          </div>

          {/* Playlist Cards - Scrollable */}
          <div className="flex-1 overflow-y-auto">
            {videoData.map((videos, i) => (
              <PlaylistCards key={i} videos={videos} />
            ))}
          </div>
        </div>
      </div>

      {/* ===== Bottom: Video details + Comments + Suggestions ===== */}
      <div className="w-[85%] flex gap-4 mt-6">
        
        {/* ===== Left: Video details & Comments ===== */}
        <div className="flex-[2] flex flex-col gap-5">
          
          {/* Title */}
          <h1 className="text-2xl font-bold">{video.title}</h1>

          {/* Channel info & actions */}
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-red-400"></div>
              <div>
                <h2 className="font-semibold">{video.channel}</h2>
                <p className="text-sm text-gray-400">{video.subscribers}</p>
              </div>
              <button className="ml-4 bg-white text-black px-4 py-2 rounded-full font-semibold">
                Subscribe
              </button>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <div className="bg-[#272727] rounded-full flex items-center px-4 py-2 gap-2">
                <BiLike size={22} /> <span>547k</span> | <BiDislike size={22} />
              </div>
              <div className="bg-[#272727] rounded-full flex items-center px-4 py-2 gap-2">
                <IoIosShareAlt size={22} /> Share
              </div>
              <div className="bg-[#272727] rounded-full flex items-center px-4 py-2 gap-2">
                <LiaDownloadSolid size={22} /> Download
              </div>
              <div className="bg-[#272727] rounded-full px-4 py-2">•••</div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-[#272727] rounded-2xl p-4">
            <h2 className="text-sm text-gray-300">
              {video.views} · {video.uploaded} <span className="text-blue-400">#sher #technology</span>
            </h2>
            <p className="mt-1">{video.description}</p>
            <p className="text-blue-400 mt-2 cursor-pointer">...more</p>
          </div>

          {/* Comments Section */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-4">15,234 Comments</h2>

            {/* Add Comment Box */}
            <div className="flex gap-3 mb-6">
              <div className="w-10 h-10 bg-gray-500 rounded-full"></div>
              <input
                type="text"
                placeholder="Add a comment..."
                className="bg-transparent border-b border-gray-500 flex-1 focus:outline-none"
              />
            </div>

            {/* Sample Comments */}
            <div className="flex flex-col gap-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-10 h-10 bg-gray-500 rounded-full"></div>
                  <div className="flex flex-col">
                    <h3 className="text-sm font-semibold">User Name <span className="text-xs text-gray-400">2 days ago</span></h3>
                    <p className="text-sm text-gray-200">This video really helped me understand the topic better!</p>
                    <div className="flex items-center gap-4 mt-2 text-gray-400 text-sm">
                      <BiLike size={16} /> 12
                      <BiDislike size={16} /> 0
                      <button className="hover:text-white">Reply</button>
                    </div>

                    {/* Reply thread */}
                    <div className="ml-10 mt-3 border-l border-gray-700 pl-4">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
                        <div>
                          <h3 className="text-xs font-semibold">Another User <span className="text-xs text-gray-400">1 day ago</span></h3>
                          <p className="text-xs text-gray-200">Glad it helped!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ===== Right: Suggested videos ===== */}
        <div className="flex-[1] flex flex-col gap-4">
          {videoData.map((videos, i) => (
            <SuggestedVideos key={i} videos={videos}/>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Watch;
