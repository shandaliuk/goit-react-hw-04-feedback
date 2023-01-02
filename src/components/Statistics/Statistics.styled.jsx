import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  column-gap: 30px;
  justify-content: center;
  margin: 0;
  list-style: none;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 25px;
  font-weight: 800;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5);
  color: saddlebrown;
`;

export const Stat = styled.span`
  font-size: 40px;
  font-weight: 800;
  color: chocolate;
`;
