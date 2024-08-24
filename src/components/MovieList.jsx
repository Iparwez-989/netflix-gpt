import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    console.log('Movies:', movies);

    return (
        <div className='text-white '>
            <div >
                <p className='text-3xl p-3 font-serif'>{title}</p>
                <div className=" flex overflow-x-scroll gap-2 ">
                    {movies?.length > 0 ? (
                        movies?.map((movie, index) => <MovieCard key={index} posterPath={movie.poster_path} />)
                    ) : (
                        <p>No movies available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
