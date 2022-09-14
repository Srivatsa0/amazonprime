import Movieslist from "./Movieslist";
import useFetch from "./useFetch";

const Home = () => {

let {movies,pending,error} = useFetch("http://localhost:5000/movieslist")

    return ( 
        <div>
           { pending && <div className="loader"><h1 id="loader">Loading.....</h1></div> }
           {error && <h1>Please Check Your Internet</h1> }
           {movies && < Movieslist movies={movies} title="All Movies"/> }
        </div>
     );
}
 
export default Home;