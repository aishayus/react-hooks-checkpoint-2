//     import React, { useState } from 'react';

//     const AddMovie = ({ handleAddMovie }) => {
//     const [newMovie, setNewMovie] = useState({
//         title: '',
//         description: '',
//         posterURL: '',
//         rating: '',
//     });

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setNewMovie({ ...newMovie, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (newMovie.title && newMovie.description && newMovie.posterURL && newMovie.rating) {
//         handleAddMovie(newMovie);
//         setNewMovie({
//             title: '',
//             description: '',
//             posterURL: '',
//             rating: '',
//         });
//         }
//     };

//     return (
//         <form className='newMovie' onSubmit={handleSubmit}>
//         <input
//             type='text'
//             name='title'
//             placeholder='Title'
//             value={newMovie.title}
//             onChange={handleInputChange}
//         />
//         <input
//             type='text'
//             name='description'
//             placeholder='Description'
//             value={newMovie.description}
//             onChange={handleInputChange}
//         />
//         <input
//             type='text'
//             name='posterURL'
//             placeholder='Poster URL'
//             value={newMovie.posterURL}
//             onChange={handleInputChange}
//         />
//         <input
//             type='number'
//             name='rating'
//             placeholder='Rating'
//             value={newMovie.rating}
//             onChange={handleInputChange}
//         />
//         <button type='submit'>Add Movie</button>
//         </form>
//     );
// };

// export default AddMovie;
