import { NextApiRequest, NextApiResponse } from 'next';

export interface PersonType {
  id: string;
  name: string;
  age: number;
}

export default function getPerson(
  req: NextApiRequest,
  res: NextApiResponse<PersonType>
) {
  res.status(200).json({ id: '1', name: 'John Doe', age: 25 });
}
