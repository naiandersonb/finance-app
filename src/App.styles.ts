import styled from "styled-components";
import { Colors } from "./assests/styles/colors";

export const Container = styled.div`

`;

export const Header = styled.div`
  background-color: #fff;
  padding: 0 1em;

  .header-container {
    height: 82px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1200px;
  }
`;

export const SocialArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const SocialLink = styled.a`
  color: #000;
  font-size: 20px;
  background-color: #F8F8F8;
  padding: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &:hover {
    opacity: 0.6;
  }
`;

export const headerText = styled.h1`
  margin: 0;
  padding: 0;
  color: #000;
  font-size: 1.5em;
  span {
    color: ${Colors.successColor};
  }
`;

export const Body = styled.div`
  padding: 0 1em;
  max-width: 1200px;
  margin: 20px auto 50px;
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-template-rows: repeat(2, max-content);
  align-items: flex-start;
  column-gap: 1em;
  grid-template-areas:
    'resume insert'
    'table table';

  .info-area {
    grid-area: resume;
  }

  .input-area {
    grid-area: insert;
  }
  .table-area {
    grid-area: table;
  }

  @media(max-width: 839px) {
    h3 {
      display: none;
    }
    grid-template-columns: 1fr;
    column-gap: 0;
  }
`;
