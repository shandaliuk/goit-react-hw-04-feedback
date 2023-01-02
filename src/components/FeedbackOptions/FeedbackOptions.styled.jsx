import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  column-gap: 100px;
  justify-content: center;
  margin: 0;
  list-style: none;
`;

export const Button = styled.button`
  padding: 10px 50px;
  background-color: burlywood;
  color: chocolate;
  border: 4px solid saddlebrown;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5);
  box-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;
