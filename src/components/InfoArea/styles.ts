import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border: 1px solid #DFDFDF;
  border-radius: 6px;
  padding: 20px;
  margin-top: -40px;
  margin-left: 1em;
  margin-right: 1em;
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #DFDFDF;
  box-shadow: 5px 8px 35px rgba(0, 0, 0, 0.13);
  border-radius: 6px;

  @media(max-width: 669px) {
    flex-direction: column;
  }

`;

export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 16px;

  @media(max-width: 669px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const MonthArrow = styled.div`
  width: 30px;
  height: 30px;
  text-align: center;
  font-size: 25px;
  background-color: #E3FAFC;
  padding: 0.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid #C5F6FA;
  color: #0B7285;
`;

export const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
  color: #000;
  font-weight: 600;
`;

export const ResumeArea = styled.div`
  flex: 2;
  display: flex;
  align-items: center;

  @media(max-width: 669px) {
    margin-top: 40px;
    width: 100%;
    flex-direction: column;
    gap: 2em;
  }
`;
