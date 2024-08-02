import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/movie/${encodeURIComponent(movie.title)}`);
    };

    return (
        <div className='container' onClick={handleCardClick}>
        <div className='box'>
            <div className='img-box'>
            <img src={movie.posterURL !== 'N/A' ? movie.posterURL : 'https://via.placeholder.com/400'} alt={movie.title} />
            </div>
            <div className='content-box'>
            <h1>{movie.title}</h1>
            </div>
        </div>
        </div>
    );
};

export default MovieCard;
