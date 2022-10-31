// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/hello
import  { req, res } from 'next';


export default async function handler(req,res) {
    const {movieId} = req.query;
    console.log(movieId);
    let data = await (await fetch('http://localhost:3000/api/movie')).json();
    console.log(data[movieId-1]);
    data=data[movieId-1]
    res.status(200).json(
        data
    )

}
