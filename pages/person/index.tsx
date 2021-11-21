import { useQuery, UseQueryResult } from 'react-query';
import axios from 'axios';

export interface PersonType {
  id: string;
  name: string;
  age: number;
}

const PersonPage = () => {
  const { isLoading, isError, error, data }: UseQueryResult<PersonType, Error> =
    useQuery<PersonType, Error>('person', async () => {
      // eslint-disable-next-line no-return-await
      return await axios.get('/api/person').then((res) => res.data);
    });

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  if (isError) return <p>Error is -- {error?.message}</p>;

  return (
    <>
      <h1>Person component</h1>
      <p>
        id: {data?.id} / name: {data?.name} / age: {data?.age}
      </p>
    </>
  );
};

export default PersonPage;
