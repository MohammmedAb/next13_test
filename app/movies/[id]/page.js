async function getMovie(id) {
  let res = await fetch(`http://localhost:3000/api/movie/${id}`);

  return res.json();
}

export default async function Page({ params }) {
  // console.log(params);
  let movie = await getMovie(params.id);
  console.log({ movie });
  return (
    <div>
      <p className="text-2xl">{movie.title}</p>
      <p className="mt-2">Year: {movie.year}</p>
      <p className="mt-2">{movie.description}</p>
    </div>
  );
}
