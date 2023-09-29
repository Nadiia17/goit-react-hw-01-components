import styled from 'styled-components';
import { FaMapMarkerAlt } from 'react-icons/fa';

export const Container = styled.div`
  width: 300px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  font-family: 'Arial', sans-serif;
  margin: 20px auto;
`;

export const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const AvatarImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 10px;
  background-color: #f0fff0;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Info = styled.p`
  font-size: 16px;
  color: #777;
  margin-bottom: 5px;
`;

export const StatusList = styled.ul`
  display: flex;
  gap: 10px;
  list-style-type: none;
  padding: 0;
`;

export const StatusLi = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #eee;
  padding: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const Label = styled.span`
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
`;

export const Quontity = styled.span`
  font-size: 18px;
  color: #333;
`;

export const LocationInfo = styled.div`
  display: flex;
  font-size: 16px;
  color: #777;
  margin-bottom: 5px;
`;

export const LocationIcon = styled(FaMapMarkerAlt)`
  margin-right: 4px;
  color: #777;
`;
