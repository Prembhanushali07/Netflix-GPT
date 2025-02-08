const MovieCard = ({MovieList}) => {
  if (!MovieList) return null;
  return (
  <div className="w-48 flex pr-3">
    <img src= {`${import.meta.env.VITE_TMBD_CDN_IMAGE_URL}${MovieList.poster_path}`} alt="" />
  </div>
  );
};

export default MovieCard;