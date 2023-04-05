import '../style/Movie.scss'
import Col from "react-bootstrap/Col";
import { Link } from 'react-router-dom';

const Movie = (props) => {
  return (
    <Col className='movie' xs={12} md={6} lg={3} xxl={2}>
      <img src={props.movie.Poster} alt={props.movie.Title} />
      <Link
        className={'btn btn-info'}
        to={`/movie-details/${props.movie.imdbID}`}
      >Discover</Link>
    </Col>
  );
};

export default Movie;
