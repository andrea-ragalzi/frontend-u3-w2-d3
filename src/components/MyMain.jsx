import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import TVShows from './TVShows';
import MovieDetails from './MovieDetails';
import NotFound from './NotFound';

const MyMain = (props) => {
  const url = `${props.endPoint}${props.myKey}&s=`
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home url={url} />} />
        <Route path="/tv-shows" element={<TVShows url={url} />} />
        <Route path="/movie-details/:id" element={<MovieDetails url={url} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </main>
  );
};

export default MyMain;
