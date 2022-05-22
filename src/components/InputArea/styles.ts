import styled from 'styled-components';

export const Container = styled.div<{ display: string }>`
  background-color: #fff;
  border: 1px solid #DFDFDF;
  border-radius: 6px;
  padding: 20px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, max-content);
  gap: 1em;
  grid-template-areas:
    'title title title'
    'date category value'
    '. . button';

  .title-input {
    grid-area: title;
  }
  .date-input {
    grid-area: date;
  }
  .category-input {
    grid-area: category;
  }
  .value-input {
    grid-area: value;
  }

  .button {
    background-color: #000;
    grid-area: button;
  }

  @media(max-width: 839px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 80px;
    z-index: 100;
    display: ${props => props.display};
    margin: 1em;

    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, max-content);
    grid-template-areas:
      'title'
      'date'
      'category'
      'value'
      'button';

    .width100 {
      width: 100%;
    }
  }
`;

export const Button = styled.button`
  display: none;
  @media(max-width: 839px) {
    font-size: 2em;
    font-weight: 600;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 0;
    background-color: #000;
    box-shadow: 0px 0px 29px rgba(0, 0, 0, 0.2);
    color: #fff;
    position: fixed;
    bottom: 24px;
    right: 18px;
  }
`;

export const Background = styled.div<{ display: string }>`
  @media(max-width: 839px) {
    display: ${props => props.display};
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(26, 26, 26, 0.66);
    width: 100%;
    height: 100vh;
  }
`;


