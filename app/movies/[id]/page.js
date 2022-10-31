async function getMovie() {
    let res = await fetch(`http://localhost:3000/api/movie/${id}`);
  
    return res.json();
  }

export default function Page({params}){
    // console.log(params);
    return <p className="text-2xl">Movie detail</p>
}