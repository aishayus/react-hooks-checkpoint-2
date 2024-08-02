import React, { useState } from 'react';
import MovieCard from './MovieCard';
import Movies from './moviesList';
import Filter from './Filter';
// import AddMovie from './AddMovie';


    const MovieList = () => {
    const [search, setSearch] = useState('');
    // const [movies, setMovies] = useState(Movies);
    // const handleAddMovie = (newMovie) => {
    //     setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
    // };

    return (
        <div>
            
        <Filter setSearch={setSearch} />

        <div className='movie'>
            {Movies
            .filter((movie) => {
                return search.toLowerCase() === ''
                ? movie
                : movie.title.toLowerCase().includes(search);
            })
            .map((movie) => {
                return <MovieCard key={movie.id} movie={movie} />;
            })}
        </div>
        {/* <AddMovie handleAddMovie={handleAddMovie} /> */}
        </div>
    );
    };

    export default MovieList;
