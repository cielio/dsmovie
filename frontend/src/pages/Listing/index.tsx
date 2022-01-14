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

  // Hook: useEffect Executar algo na instanciação ou destruição do componente, observar estado
  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size12&page=1`)
    .then(response => {
      const data = response.data as MoviePage;
      setPageNumber(data.number)
    });
  })

  axios.get(`${BASE_URL}/movies?size12&page=1`)
    .then(response => {
      const data = response.data as MoviePage;
      setPageNumber(data.number)
    });


  return (<>
  <p>{pageNumber}</p>
    <Pagination />
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
          <MovieCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
          <MovieCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
          <MovieCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
          <MovieCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
          <MovieCard />
        </div>
      </div>
    </div>
  </>
  );
}

export default Listing;