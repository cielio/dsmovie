import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";

//import './styles.css'
function Listing() {

  axios.get("http://localhost:8080/movies")
    .then(response => {
      console.log(response.data);
    });


  return (<>
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