import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Movies from './moviesList';

const MovieDetail = () => {
    const { title } = useParams();
    const movie = Movies.find((movie) => movie.title === decodeURIComponent(title));


    return (
        <>
        <div className="movie-detail">
            <div className='movie-box'>
                <div className='iframe'>
                    <iframe
                    width="600"
                    height="400"
                    src={movie.trailer}
                    title={movie.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    ></iframe>
                </div>
                <div className='content'>
                    <h1>Name: {movie.title}</h1>
                    <p>Description: {movie.description}</p>
                    <span>Rating: {movie.rating}/10</span>
                    <Link className='link' to='/'>Back to Home</Link>
                </div>
            </div>
        </div>
        </>
    );
};

export default MovieDetail;
