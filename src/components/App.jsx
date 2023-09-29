import data from './Statistics/data.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <>
      <Profile />
      <Statistics title="Upload stats" stats={data} />
    </>
  );
};
