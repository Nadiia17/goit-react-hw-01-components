import styled from 'styled-components';
import { generateRandomPastelColor } from './GenerateColor';

export const StatisticsSection = styled.section`
  margin: 20px auto;
  width: 450px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const Title = styled.h2`
  margin-bottom: 15px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  padding: 0;
`;

export const StatItem = styled.li`
  background-color: ${generateRandomPastelColor};
  padding: 10px;
  border-radius: 5px;
  width: 18%;
  margin: 0 5px;
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 8px;
`;

export const Value = styled.span`
  display: block;
  font-weight: bold;
`;
