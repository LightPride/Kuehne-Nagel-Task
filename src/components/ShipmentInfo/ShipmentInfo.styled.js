import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const Modal = styled.div`
  width: 1050px;
  height: 300px;
  padding: 60px 40px;
  background-color: white;
  border-radius: 5px;
  letter-spacing: 0.2mm;
  position: relative;
  overflow: hidden;
`;

export const LineTop = styled.hr`
  position: absolute;
  border-color: rgb(247, 247, 247, 0.3);
  width: 100%;
  left: 0;
  top: 35px;

  margin: 0;
`;

export const LineBottom = styled.hr`
  position: absolute;
  border-color: rgb(247, 247, 247, 0.3);
  width: 95%;
  left: 2.5%;
  bottom: 35px;

  margin: 0;
`;

export const ModalHeader = styled.h3`
  color: #a2aebc;
  font-size: 10px;
  margin-bottom: 25px;
`;

export const ShipmentForm = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 10px;
`;

export const FormInput = styled.input`
  margin-top: 10px;
  padding-left: 10px;
  height: 30px;
  border: 2px solid black;
  background-color: rgb(233, 236, 239);
  color: rgb(148, 162, 180);
  outline: none;
  width: 500px;
  border-radius: 5px;
  outline: none;
  border: none;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;

  font-size: 12px;
  font-weight: 500;
  line-height: 1.71;
  letter-spacing: 0.01em;
  color: rgb(118, 125, 139);
`;
