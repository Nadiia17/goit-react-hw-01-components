import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <>
      <Profile />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
    </>
  );
};
