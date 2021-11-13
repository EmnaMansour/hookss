import React from 'react';
import MovieCard from './MovieCard';
import './moviecard.css';

const MovieList = ({movies}) => {
	return (
		<div className="Card">
			
			<>
			</> 
			{
    movies.map((el) => <MovieCard  movie={el} key={el.id}/>)
			}
		</div>
	);
};

export default MovieList;