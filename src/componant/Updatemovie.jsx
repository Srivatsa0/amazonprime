import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const Updatemovie = ({previousMovie}) => {
   let [moviename,setMovieName] = useState(previousMovie.moviename);
   let [cast,setCast] = useState(previousMovie.cast)
    let [director,setDirector] = useState(previousMovie.director)
    let [music , setMusic] = useState(previousMovie.music)
    let [year, setYear] = useState(previousMovie.year)
    let [producers,setProducers] = useState(previousMovie.producers)

    let {id} = useParams();

    let history = useHistory()

    let handleSubmit= (e)=>{
        e.preventDefault();
        let updateMovie = {moviename , cast , director , music , year , producers}

         fetch(`http://localhost:5000/movieslist/${previousMovie.id}`,
        {
            method : "PUT",
            headers : {
                "ACCEPT":"application/json",
                "CONTENT-TYPE":"application/json"
            },
            body : JSON.stringify(updateMovie)
        })
         .then(()=>{history.push("/")})
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit} >
                <div>
                <label >Moviename:</label>
                <input type="text" value={moviename} onChange={(e )=>{setMovieName(e.target.value)}} />
                <label >Cast :</label>
                <input type="text"  value={cast} onChange={(e)=>{setCast(e.target.value)}}/>
                <label > Director : </label>
                <input type="text" value={director} onChange={(e)=>{setDirector(e.target.value)}} />
                <label >Music : </label>
                <input type="text" value={music} onChange={(e)=>{setMusic(e.target.value)}} />
                <label >Year : </label>
                <input type="text"  value={year} onChange={(e)=>{setYear(e.target.value)}}/>
                <label  >Producers : </label>
                <input type="text" value={producers} onChange={(e)=>{setProducers(e.target.value)}} /> 
                </div>
                <input type="submit" value="Update" />
            </form>
        </div>
     );
}
 
export default Updatemovie;