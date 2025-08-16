import React from 'react'
import { Link } from 'react-router'

const SuggestedVideos = ({videos}) => {
  return (
     <Link to={`/watch/${videos.id}`}>
    <div className="flex gap-3 cursor-pointer hover:bg-gray-800 p-2 rounded-lg">
              <div className="w-40 h-24 rounded-lg overflow-hidden bg-gray-700">
                <img
                  src={videos.thumbnail}
                  alt="Thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <h3 className="text-sm font-medium leading-tight line-clamp-2">
                 {videos.title}
                </h3>
                <p className="text-xs text-gray-400">{videos.channel}</p>
                <p className="text-xs text-gray-400">{videos.views} · {videos.uploaded}</p>
              </div>
            </div>
            </Link>
  )
}

export default SuggestedVideos