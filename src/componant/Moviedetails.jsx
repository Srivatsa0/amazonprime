import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Updatemovie from "./Updatemovie";
import useFetch from "./useFetch";

const Moviedetails = () => {

    let [update , setUpdate] = useState(false);

    let {id} = useParams()

    let history = useHistory()

    let {movies,pending,error} = useFetch(`http://localhost:5000/movieslist/${id}`)

    let handleDelete = (id)=>{
        fetch(`http://localhost:5000/movieslist/${id}`,{ method : "DELETE"})
        .then(()=>{history.push("/")})
    }
    return (
        <div className="moviedetail">
            
          <h1 className="headers">Movie details</h1>

            {movies &&
            <div className="detailsss">
                <h1>Movie : {movies.moviename}</h1>
                <h2>Cast : {movies.cast}</h2>
                <h2>Director : {movies.director}</h2>
                <h2>Music : {movies.music}</h2>
                <h2>Year : {movies.year}</h2>
                <h2>Producers : {movies.producers}</h2>
                <button  id="delete" onClick={()=>handleDelete(movies.id)}>Delete</button>
                <button id="update" onClick={()=>{setUpdate(true)}}>Update</button>
            </div> }
            {update && <Updatemovie previousMovie={movies}/>}

        </div>
      );
}
 
export default Moviedetails;
