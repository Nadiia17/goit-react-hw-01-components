import {
  AvatarImg,
  Container,
  DescriptionDiv,
  Info,
  Label,
  LocationIcon,
  LocationInfo,
  Name,
  Quontity,
  StatusLi,
  StatusList,
} from './Profile.styled';
import user from './user.json';

export const Profile = () => {
  const {
    username,
    tag,
    location,
    stats: { followers, views, likes },
  } = user;

  return (
    <Container>
      <DescriptionDiv>
        <AvatarImg src={user.avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Info>@{tag}</Info>
        <LocationInfo>
          <LocationIcon />
          {location}
        </LocationInfo>
      </DescriptionDiv>

      <StatusList>
        <StatusLi>
          <Label>Followers</Label>
          <Quontity>{followers}</Quontity>
        </StatusLi>
        <StatusLi>
          <Label>Views</Label>
          <Quontity>{views}</Quontity>
        </StatusLi>
        <StatusLi>
          <Label>Likes</Label>
          <Quontity>{likes}</Quontity>
        </StatusLi>
      </StatusList>
    </Container>
  );
};
