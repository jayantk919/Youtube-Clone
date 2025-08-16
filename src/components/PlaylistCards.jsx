import React from 'react';
import { Link } from 'react-router';

const PlaylistCards = ({videos}) => {
  return (
    <Link to={`/watch/${videos.id}`}>
    <div className="w-full flex items-start gap-3 px-5 py-2 hover:bg-gray-700 cursor-pointer transition-colors duration-150">
      
      {/* Thumbnail */}
      <div className="shrink-0 relative w-[40%] rounded-lg overflow-hidden aspect-video">
        <img
          className="w-full h-full object-cover"
          src={videos.thumbnail}
          alt="Video Thumbnail"
        />
        <span className="absolute bottom-1 right-1 text-white text-xs px-1 py-0.5 rounded-sm bg-black/80">
          {videos.duration}
        </span>
      </div>

      {/* Details */}
      <div className="flex flex-col justify-between flex-1 min-w-0">
        <h1 className="text-sm font-medium leading-tight text-white line-clamp-2">
          {videos.title}
        </h1>
        <p className="text-xs text-gray-400">{videos.channel}</p>
      </div>
    </div>
    </Link>
  );
};

export default PlaylistCards;
