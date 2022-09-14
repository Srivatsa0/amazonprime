// import { useParams } from "react-router-dom";
// import Movieslist from "./Movieslist";
// import useFetch from "./useFetch";


// const Searchpage = () => {

//     let [searchVal] = useParams();
//     let {movies,pending,error} = useFetch("http://localhost:5000/movieslist")

//     return ( 
//         <div>
//         <h1>Search page{searchVal}</h1>

//         {movies && <Movieslist Movieslist={movies.filter((movie)=>{return movie.movieName.tolowercase()} )} title="search Result"/>}

//         </div>
//      );
// }
 
// export default Searchpage;