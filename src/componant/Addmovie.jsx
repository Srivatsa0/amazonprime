import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";

const Addmovie = () => {

    const [movie,setMovie] = useState("");
    const [cast,setCast] = useState("");
    const [director,setDirector] = useState("");
    const [music,setMusic] = useState("");
    const [year,setYear] = useState("");
    const [producers,setProducers] = useState("");
    

    let history = useHistory();

    let handleSubmit = (e) => {
        e.preventDefault();

        let addMovie = {movie,cast,director,music,year,producers}
        fetch("http://localhost:5000/movieslist",
        {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(addMovie)
        })
        .then(()=>{history.push("/")})
        .catch((err)=>{console.log(err.message);})
    }

    return ( 
        <div className="adding">
            <h1 className="Add">Add movie</h1>
            <form className="form"  onSubmit={handleSubmit}>
                <div className="adds">
                <label >Movie : </label>
                <input type="text" placeholder="movie name.." id="text" value={movie} onChange={((e)=>{setMovie(e.target.value)})} />
                <label >Cast : </label>
                <input type="text" placeholder="Cast" id="text" value={cast} onChange={((e)=>{setCast(e.target.value)})} />
                <label > Director: </label>
                <input type="text" placeholder="Director"  id="text" value={director} onChange={((e)=>{setDirector(e.target.value)})}/>
                <label > Music : </label>
                <input type="text" placeholder="music" id="text" value={music} onChange={((e)=>{setMusic(e.target.value)})}/>
                <label > Year: </label>
                <input type="text" placeholder="year" id="text" value={year} onChange={((e)=>{setYear(e.target.value)})}/>
                <label > Producers: </label>
                <input type="text" placeholder="producers"id="text"  value={producers} onChange={((e)=>{setProducers(e.target.value)})}/>
                </div>
                <input type="submit" value="Add movie" className="btn2"/>
            </form>

        </div>
     );
}
 
export default Addmovie;