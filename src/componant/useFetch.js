import { useEffect , useState } from "react";

const useFetch = (request) => {

    let [movies,setMovies] = useState(null);
    let [pending , setpending] = useState(true);
    let [error , setError] = useState(null);

    useEffect(()=>{

        setTimeout(()=>{

            fetch(request)
            .then((response)=>{return response.json();})
            .then((data)=>{setMovies(data); setpending(false);})
            .catch((error)=>{setpending(true); setError(error.message);})

        },3000)

    },[])

    return {movies,pending,error}
}
 
export default useFetch;