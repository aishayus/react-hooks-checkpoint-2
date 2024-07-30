    import React, { useState } from 'react';
    import MovieCard from './MovieCard';
    import Movies from './moviesList';

    const MovieList = () => {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState(Movies);
    const [newMovie, setNewMovie] = useState({
        title: '',
        description: '',
        posterURL: '',
        rating: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMovie({ ...newMovie, [name]: value });
    };

    const handleAddMovie = (e) => {
        e.preventDefault();
        if (newMovie.title && newMovie.description && newMovie.posterURL && newMovie.rating) {
        setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
        setNewMovie({
            title: '',
            description: '',
            posterURL: '',
            rating: '',
        });
        }
    };

    return (
        <div>
        <form className='form'>
            <input
            placeholder='eg pretty woman...'
            onChange={(e) => setSearch(e.target.value)}
            />
        </form>
        
        <div className='movie'>
            {movies
            .filter((movie) => {
                return search.toLowerCase() === ''
                ? movie
                : movie.title.toLowerCase().includes(search);
            })
            .map((movie) => {
                return <MovieCard movie={movie} />;
            })}
        </div>
        <form className='newMovie' onSubmit={handleAddMovie}>
            <input
            type='text'
            name='title'
            placeholder='Title'
            value={newMovie.title}
            onChange={handleInputChange}
            />
            <input
            type='text'
            name='description'
            placeholder='Description'
            value={newMovie.description}
            onChange={handleInputChange}
            />
            <input
            type='text'
            name='posterURL'
            placeholder='Poster URL'
            value={newMovie.posterURL}
            onChange={handleInputChange}
            />
            <input
            type='number'
            name='rating'
            placeholder='Rating'
            value={newMovie.rating}
            onChange={handleInputChange}
            />
            <button type='submit'>Add Movie</button>
        </form>
        </div>

        
    );
    };

    export default MovieList;
