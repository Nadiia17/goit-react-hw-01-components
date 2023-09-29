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

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <DescriptionDiv>
        <AvatarImg src={avatar} alt="User avatar" />
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
          <Quontity>{stats.followers}</Quontity>
        </StatusLi>
        <StatusLi>
          <Label>Views</Label>
          <Quontity>{stats.views}</Quontity>
        </StatusLi>
        <StatusLi>
          <Label>Likes</Label>
          <Quontity>{stats.likes}</Quontity>
        </StatusLi>
      </StatusList>
    </Container>
  );
};
