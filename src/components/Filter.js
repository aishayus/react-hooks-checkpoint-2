import React from 'react';

const Filter = ({ setSearch }) => {
    return (
        <form className='form'>
        <input
            placeholder='Search movies...'
            onChange={(e) => setSearch(e.target.value)}
        />
        </form>
    );
    };

export default Filter;
