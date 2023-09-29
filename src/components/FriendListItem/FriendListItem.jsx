import { Avatar, Friend, Name, Status } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Friend>
      <Status $isOnline={isOnline} />
      <Avatar src={avatar} />
      <Name>{name}</Name>
    </Friend>
  );
};
