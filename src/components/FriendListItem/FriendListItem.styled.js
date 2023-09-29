import styled from 'styled-components';

export const Friend = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  background-color: #f0fff0;
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};
  margin-right: 10px;
`;

export const Avatar = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: #fff;
  background-image: url(${props => props.src});
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
`;
export const Name = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;
