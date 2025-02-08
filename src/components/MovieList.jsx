import MovieCard from './MovieCard'

const MovieList = ({title,Movies}) => {
  return (
    <div className= 'px-6 pb-2'>
      <h1 className='pt-2 text-3xl font-bold pb-4 text-white'>{title}</h1>
        <div className='flex overflow-x-auto hide-scroll-bar'>
            <div className='flex'>
              {Movies?.map((movie) => (<MovieCard key={MovieCard.id} MovieList={movie}/>
            ))}
            </div>
        </div>
    </div>
  )
}

export default MovieList