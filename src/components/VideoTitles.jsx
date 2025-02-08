const VideoTitles = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold pb-4">{title}</h1>
      <p className="pb-5  w-1/3">{overview}</p>
      <div>
        <button className="bg-white/80   text-black border-black rounded-xl px-7 p-3 text-lg cursor-pointer hover:bg-white/50">▶️ Play Now</button>
        <button className= "bg-gray/80   text-white border-black rounded-xl px-7 p-3 text-lg cursor-pointer mx-2 hover:bg-white/50">More Info </button>
      </div>
    </div>
  )
}

export default VideoTitles