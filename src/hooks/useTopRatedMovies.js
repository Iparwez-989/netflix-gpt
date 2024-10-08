import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();

    const getTopRatedMovie = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTION)
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results))

    }
    useEffect(()=>{
        getTopRatedMovie()
    },[])
}
export default useTopRatedMovies;