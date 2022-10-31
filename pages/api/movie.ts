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
      title: 'Movie 1',
      year: 2021,
      description:
        'Movie 1 description description description description description description description description description description description description description ',
    },
    {
      id: '2',
      title: 'Movie 2',
      year: 2020,
      description:
        'Movie 2 description description description description description description description description description description description description description ',
    },
  ]);
}
