import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import {useEffect} from 'react'
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();
    const getUpcomingMovie = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTION)
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results))

    }

    useEffect(()=>{
        getUpcomingMovie();
    },[])
}
export default useUpcomingMovies;