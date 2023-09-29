import styled from 'styled-components';

export const Table = styled.table`
  width: 450px;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  margin: 20px auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`;

export const TableTitle = styled.th`
  background-color: #f0fff0;
  color: #333;
  padding: 10px;
  border: 1px solid #ddd;
  text-transform: uppercase;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  &:nth-child(odd) {
    background-color: #ffffff;
  }
`;

export const TableItem = styled.td`
  padding: 10px;
  text-align: center;
  text-transform: capitalize;
`;
