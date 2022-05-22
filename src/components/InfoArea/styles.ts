import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border: 1px solid #DFDFDF;
  border-radius: 6px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border: 1px solid #DFDFDF;
  border-radius: 6px;
`;

export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  justify-content: space-between;
`;

export const MonthArrow = styled.div`
  width: 36px;
  height: 36px;
  text-align: center;
  font-size: 20px;
  background-color: #F8F8F8;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid #E2E2E2;
  color: #000;
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
  margin-top: 40px;
  width: 100%;
  flex-direction: column;
  gap: 1.5em;
`;
