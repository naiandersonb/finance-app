import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


export const Title = styled.div`
  text-align: center;
  font-weight: 400;
  color: #888;
  margin-bottom: 5px;
  font-size: 14px;
`;

export const Info = styled.div<{ color?: string, borderTop?: boolean }>`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.color ?? '#000'};

  @media(max-width: 669px) {
    font-size: 1em;
  }
`;
