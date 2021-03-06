//import { ReactComponent as apelido } from 'assets/img/';
import MovieScore from 'components/MovieScore';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';

type Props = {
    movie: Movie
}

function MovieCard({ movie }: Props) {
    return (

        <div className="shadow rounded">
            <img className="dsmovie-movie-card-image rounded-top" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container rounded-bottom">
                <h3>{movie.title}</h3>
                <MovieScore count={movie.count} score={movie.score} />

                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>
            </div>
        </div>

    );
}
export default MovieCard;