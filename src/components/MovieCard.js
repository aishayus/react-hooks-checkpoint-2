import React from 'react'

const MovieCard = ({movie}) => {
    return (
        <div className='container'>
            <div className='box'>
            <div className='img-box'>
                    <img src={movie.posterURL!== 'N/A'? movie.posterURL: 'https://via.placeholder.com/400'} alt='movie.title'/>
                </div>
                <div className='content-box'>
                    <h1>{movie.title}</h1>
                    <p>{movie.description}</p>
                    <span>{movie.rating}/10</span>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
