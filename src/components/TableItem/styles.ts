import styled from 'styled-components';

export const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: #000;
  background-color: ${props => props.color};
  font-size: 14px;

  @media(max-width: 719px) {
   display: flex;
   text-align: end;
  }
`;

export const Value = styled.div<{ color: string }>`
  color: ${props => props.color};
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 10% 15% 1fr 20%;
  grid-template-areas: 'date category title value';
  gap: 1em;
  align-items: center;
  text-align: start;
  background-color: #fff;
  border: 1px solid #DFDFDF;
  border-radius: 6px;
  padding: 20px 1em;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  @media(max-width: 839px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'title category'
      'date value';
  }

  &:hover {
    box-shadow: 5px 8px 35px rgba(0, 0, 0, 0.13);
  }
`;

export const DateCell = styled.div`
  grid-area: date;
  width: 100%;
  display: flex;

  @media(max-width: 839px) {
   color: #868E96;
  }
`;

export const TitleCell = styled.div`
  grid-area: title;
  width: 100%;
  display: flex;

  @media(max-width: 839px) {
    font-size: 1.2em;
    font-weight: 600;
  }
`;

export const ValueCell = styled.div`
  grid-area: value;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const CategoryCell = styled.div`
  grid-area: category;
  width: 100%;
  display: flex;
  @media(max-width: 719px) {
    justify-content: flex-end;
  }
`;
