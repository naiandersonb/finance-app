import styled from "styled-components";

export const TableContainer = styled.div`
  padding: 1em;
  border-radius: 6px;
`;

export const Header = styled.div`
  margin: 20px 1em 0;
  display: grid;
  grid-template-columns: 10% 15% 1fr 20%;
  gap: 1em;
  text-align: start;

  @media(max-width: 839px) {
    display: none;
  }
`;

export const HeaderTitle = styled.h4<{ justifyContent?: string }>`
  font-size: 16px;
  color: #000;
  display: flex;
  justify-content: ${props => props.justifyContent || 'flex-start'};
`;

export const Body = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;

  @media(max-width: 839px) {
    margin-top: 20px;
  }
`;

