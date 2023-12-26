import { useEffect, useState } from 'react'
import { API_URL } from '../../utils/api'
import VideoCard from './VideoCard'
const VideoContent = () => {
  const [videos, Setvideos] = useState([])
  //useEffect to fetching data
  useEffect(() => {
    fetchApi()
  }, [])

  const fetchApi = async () => {
    const data = await fetch(API_URL)
    const result = await data.json()
    console.log(result.items)
    Setvideos(result.items)
  }
  console.log(videos)
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <VideoCard
          key={videos.id}
          videos={video}
        />
      ))}
    </div>
  )
}

export default VideoContent
