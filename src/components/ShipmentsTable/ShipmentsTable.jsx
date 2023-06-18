import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaIdCardAlt, FaTimes } from 'react-icons/fa';
import { BiSortAlt2 } from 'react-icons/bi';
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
  SortButton,
  SortButtonWrapper,
} from './ShipmentsTable.styled';

export function ShipmentsTable({ data, onDelete, onSort }) {
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
            <TableHeader>
              CUSTOMER{' '}
              <SortButtonWrapper>
                {' '}
                <SortButton
                  onClick={onSort.bind(null, 'customer')}
                  type="button"
                >
                  <BiSortAlt2 style={{ fill: '#a2a8ad' }} />
                </SortButton>
              </SortButtonWrapper>
            </TableHeader>
            <TableHeader>
              TRACKINGNO{' '}
              <SortButtonWrapper>
                <SortButton
                  onClick={onSort.bind(null, 'trackingNo')}
                  type="button"
                >
                  <BiSortAlt2 style={{ fill: '#a2a8ad' }} />
                </SortButton>
              </SortButtonWrapper>
            </TableHeader>
            <TableHeader>
              STATUS{' '}
              <SortButtonWrapper>
                <SortButton onClick={onSort.bind(null, 'status')} type="button">
                  <BiSortAlt2 style={{ fill: '#a2a8ad' }} />
                </SortButton>
              </SortButtonWrapper>
            </TableHeader>
            <TableHeader>
              CONSIGNEE
              <SortButtonWrapper>
                <SortButton
                  onClick={onSort.bind(null, 'consignee')}
                  type="button"
                >
                  <BiSortAlt2 style={{ fill: '#a2a8ad' }} />
                </SortButton>
              </SortButtonWrapper>
            </TableHeader>
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
