import styled from "styled-components";

export const TableContainer = styled.div`
  border-top: 1px solid #E2E2E2;
  margin: 30px 0;

  @media(max-width: 839px) {
    border-top: 0;
  }
`;

export const Header = styled.div`
  margin: 0 1em 0;
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
  gap: 0.5em;

  @media(max-width: 839px) {
    margin-top: 20px;
  }
`;

