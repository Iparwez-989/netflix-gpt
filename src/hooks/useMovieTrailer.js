import {useDispatch} from 'react-redux'
import { API_OPTION } from '../utils/constant'
import { addMovieTrailer } from '../utils/movieSlice'
import {useEffect} from 'react'
const useMovieTrailer = (movieId)=>{
// const[trailerKey,setTrailerKey]= useState(null) //Instead of using this useState we can use redux store directly for the trailer key
    const dispatch = useDispatch()

    const getMovieVideo = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTION)
        const json = await data.json();
        // console.log(json)
        const filterData = json.results.filter((video)=>video.type==="Trailer")
        const trailer = filterData.length? filterData[0]: json.results[0];  //This line means that if there is trailer then it will pick the first one otherwise it will pick any first video from the result
        // console.log(trailer)
        dispatch(addMovieTrailer(trailer))

    }
    useEffect(()=>{
        getMovieVideo()
    },[])
}

export default useMovieTrailer