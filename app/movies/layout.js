// import {experimental_use as use} from 'react';

import Link from "next/link";

async function getMovies() {
  let res = await fetch('http://localhost:3000/api/movie');

  return res.json();
}

export default async function Layout({children}) {
  let movies = await getMovies();
  // console.log(movies);

  return (
    <div className="flex">
      <ul className="pr-10 text-sm"> 
        {movies.map((movie) => (
          <li key={movie.id}><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>
        ))}
      </ul>

      <div>{children}</div>
    </div>
  );
}
