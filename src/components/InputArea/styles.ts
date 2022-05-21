import styled from 'styled-components';

export const Container = styled.div<{ display: string }>`
  background-color: #fff;
  border: 1px solid #DFDFDF;
  box-shadow: 5px 8px 35px rgba(0, 0, 0, 0.13);
  border-radius: 6px;
  padding: 20px;
  margin-top: 20px;
  margin-left: 1em;
  margin-right: 1em;
  display: flex;
  align-items: flex-end;
  gap: 1em;

  @media(max-width: 669px) {
    flex-direction: column;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 120px;
    z-index: 100;
    display: ${props => props.display};

    .width100 {
      width: 100%;
    }
  }
`;

export const Button = styled.button`
  display: none;
  @media(max-width: 669px) {
    font-size: 2em;
    font-weight: 600;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 0;
    background-color: #1C7ED6;
    box-shadow: 0px 0px 29px rgba(0, 0, 0, 0.2);
    color: #fff;
    position: fixed;
    bottom: 24px;
    right: 24px;
  }
`;

export const Background = styled.div<{ display: string }>`
  @media(max-width: 669px) {
    display: ${props => props.display};
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(26, 26, 26, 0.66);
    width: 100%;
    height: 100vh;
  }
`;


