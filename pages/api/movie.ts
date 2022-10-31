// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/hello
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = [
  {
    name: string;
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    {
      id: '1',
      title: 'interstellar',
      year: 2014,
      description:
        'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans ',
    },
    {
      id: '2',
      title: 'La La Land',
      year: 2016,
      description:
        'When Sebastian, a pianist, and Mia, an actress, follow their passion and achieve success in their respective fields, they find themselves torn between their love for each other and their careers',
    },
  ]);
}
