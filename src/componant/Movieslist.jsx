import { Link } from "react-router-dom";

const Movieslist = ({movies,title}) => {
    return ( 
        <div className="movies">
            {/* <h1 className="all">{title}</h1> */}
            {
                movies.map((mov)=>{
                    return(
                        <Link to={`/Moviedetails${mov.id}`} id="details">
                        <div className="movie">
                        <h1>Movie  : {mov.moviename}</h1>
                        <h2>Cast : {mov.cast}</h2>
                        <h2>director : {mov.director}</h2>
                        </div>
                        </Link>
                    )

                })
            }
        </div>
     );
}
 
export default Movieslist;