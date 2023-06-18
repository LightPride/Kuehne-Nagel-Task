import styled from '@emotion/styled';

export const Table = styled.table`
  width: 100%;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;
`;

export const TableHead = styled.thead``;

export const TableRow = styled.tr``;

export const TableHeader = styled.th`
  background-color: rgb(245, 249, 252);
  color: rgb(162, 168, 173);
  text-align: left;
  font-size: 10px;
  position: relative;
  font-weight: 500;
  letter-spacing: 0.4mm;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;
  border-bottom: 1px solid rgb(231, 227, 227);
  &:first-of-type {
    border-top-left-radius: 10px 10px;
  }
  &:last-of-type {
    border-top-right-radius: 10px 10px;
  }
`;

export const TableBody = styled.tbody``;

export const TableData = styled.td`
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 20px;
  border-bottom: 1px solid rgb(231, 227, 227);
  font-size: 12px;
  line-height: 1.71;
  letter-spacing: 0.01em;
  background-color: #ffffff;
  color: rgb(121, 125, 128);
`;

export const SortButton = styled.button`
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: transparent;
`;

export const SortButtonWrapper = styled.div`
  position: absolute;
  top: 30%;
  right: 0;
  display: flex;
  align-items: center;
`;

export const DeleteButton = styled.button`
  background-color: rgb(245, 54, 92);
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  height: 40px;
  width: 50px;
  margin: 0;
  outline: none;
  transition: color 100ms;
  &:hover,
  &:focus {
    background-color: rgb(241, 123, 146);
  }
`;

export const DetailsButton = styled.button`
  background-color: rgb(17, 205, 239);
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  height: 40px;
  width: 50px;
  margin-right: 15px;
  outline: none;
  transition: color 100ms;
  &:hover,
  &:focus {
    background-color: rgb(152, 230, 244);
  }
`;
