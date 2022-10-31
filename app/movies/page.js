// import {experimental_use as use} from 'react';

async function getMovies(){
    let res = await fetch('http://localhost:3000/api/movie');

    return res.json();
}

export default async function Page() {
    let movies = await getMovies();
    // console.log(movies);

    return <ul>
        {movies.map(movie =>(
            <li key={movie.id}>{movie.title}</li>
        ))}
    </ul>
}