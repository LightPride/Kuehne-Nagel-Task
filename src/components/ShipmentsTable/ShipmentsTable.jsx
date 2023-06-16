import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaIdCardAlt, FaTimes } from 'react-icons/fa';
import { ShipmentInfo } from 'components/ShipmentInfo/ShipmentInfo';
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableData,
  DeleteButton,
  DetailsButton,
} from './ShipmentsTable.styled';

export function ShipmentsTable({ data, onDelete }) {
  const [showModal, setShowModal] = useState(false);
  const [shipment, setShipment] = useState({});

  const toggleModal = shipment => {
    setShowModal(!showModal);
    setShipment(shipment);
  };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>ORDERNO</TableHeader>
            <TableHeader>DELIVERYDATE</TableHeader>
            <TableHeader>CUSTOMER</TableHeader>
            <TableHeader>TRACKINGNO</TableHeader>
            <TableHeader>STATUS</TableHeader>
            <TableHeader>CONSIGNEE</TableHeader>
            <TableHeader></TableHeader>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map(shipment => {
            const { orderNo, date, customer, trackingNo, status, consignee } =
              shipment;
            return (
              <TableRow key={orderNo}>
                <TableData>{shipment.orderNo}</TableData>
                <TableData>{date}</TableData>
                <TableData>{customer} </TableData>
                <TableData>{trackingNo}</TableData>
                <TableData>{status}</TableData>
                <TableData>{consignee}</TableData>
                <TableData>
                  <DetailsButton
                    type="button"
                    onClick={() => toggleModal(shipment)}
                  >
                    <FaIdCardAlt />
                  </DetailsButton>
                  <DeleteButton type="button" onClick={() => onDelete(orderNo)}>
                    <FaTimes />
                  </DeleteButton>
                </TableData>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {showModal && (
        <ShipmentInfo
          shipment={shipment}
          handleModal={toggleModal}
        ></ShipmentInfo>
      )}
    </>
  );
}

ShipmentsTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      orderNo: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      customer: PropTypes.string.isRequired,
      trackingNo: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      consignee: PropTypes.string.isRequired,
    })
  ),
};
