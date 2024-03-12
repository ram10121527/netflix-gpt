import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
const movies = useSelector((store) => store.movies);

return (

<div className=' bg-black'>
<div className='mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20'>
{movies?
      <MovieList title={"Now Playing"} movies ={movies.nowPlayingMovies}/>
      :
      <div>loading</div>}

{movies?
<MovieList title={"PopularMovies"} movies ={movies.nowPopularMovies}/>
:
<div>loading</div>}

{movies?
      <MovieList title={"Upcomming Movies"} movies ={movies.nowPlayingMovies}/>
      :
      <div>loading</div>}

{movies?
      <MovieList title={"Horror"} movies ={movies.nowPlayingMovies}/>
      :
      <div>loading</div>}

{movies?
      <MovieList title={"Family Entertainer"} movies ={movies.nowPlayingMovies}/>
      :
      <div>loading</div>}
</div>
</div>
);
}

export default SecondaryContainer;