import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

//import './styles.css'
function Listing() {

  //Hook: useState Manter estado no componente
  const [pageNumber, setPageNumber] = useState(0);

  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true
  });

  // Hook: useEffect Executar algo na instanciação ou destruição do componente, observar estado
  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size12&page=${pageNumber}`)
    .then(response => {
      const data = response.data as MoviePage;
      setPage(data)
    });
  }, [pageNumber])

  return (<>
    <Pagination />
    <div className="container">
      <div className="row">

        {page.content.map(movie => (
        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
          <MovieCard  movie={movie}/>
        </div>
        ))}

      </div>
    </div>
  </>
  );
}

export default Listing;