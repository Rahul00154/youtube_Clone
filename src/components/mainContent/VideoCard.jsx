import React from 'react'

const VideoCard = ({ videos }) => {
  console.log(videos)
  const { snippet, statistics } = videos
  const { title, channelTitile, thumbnails } = snippet

  return (
    <div className="m-2 p-2 shadow-lg w-72">
      <img
        src={thumbnails.medium.url}
        alt="video"
      />
      <span>{title}</span>
      <div>
        <span> {channelTitile} </span>
      </div>
      <span>{statistics.viewCount} views</span>
    </div>
  )
}

export default VideoCard
