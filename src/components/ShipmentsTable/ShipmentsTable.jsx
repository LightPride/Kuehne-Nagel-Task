import { Component } from 'react';
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

export class ShipmentsTable extends Component {
  state = {
    showModal: false,
    orderNo: '',
    date: '',
    customer: '',
    trackingNo: '',
    status: '',
    consignee: '',
  };

  toggleModal = (orderNo, date, customer, trackingNo, status, consignee) => {
    this.setState({
      showModal: !this.state.showModal,
      orderNo,
      date,
      customer,
      trackingNo,
      status,
      consignee,
    });
  };

  render() {
    const { data, onDelete } = this.props;
    const {
      orderNo,
      date,
      customer,
      trackingNo,
      status,
      consignee,
      showModal,
    } = this.state;
    return (
      <>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>OrderNo</TableHeader>
              <TableHeader>DeliveryDate</TableHeader>
              <TableHeader>Customer</TableHeader>
              <TableHeader>TrackingNo</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Consignee</TableHeader>
              <TableHeader></TableHeader>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map(
              (
                { orderNo, date, customer, trackingNo, status, consignee },
                index
              ) => {
                return (
                  <TableRow key={orderNo}>
                    <TableData>{orderNo}</TableData>
                    <TableData>{date}</TableData>
                    <TableData>{customer}</TableData>
                    <TableData>{trackingNo}</TableData>
                    <TableData>{status}</TableData>
                    <TableData>{consignee}</TableData>
                    <TableData>
                      <DetailsButton
                        type="button"
                        onClick={() =>
                          this.toggleModal(
                            orderNo,
                            date,
                            customer,
                            trackingNo,
                            status,
                            consignee
                          )
                        }
                      >
                        <FaIdCardAlt />
                      </DetailsButton>
                      <DeleteButton
                        type="button"
                        onClick={() => onDelete(orderNo)}
                      >
                        <FaTimes />
                      </DeleteButton>
                    </TableData>
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </Table>
        {showModal && (
          <ShipmentInfo
            orderNo={orderNo}
            date={date}
            customer={customer}
            trackingNo={trackingNo}
            status={status}
            consignee={consignee}
            handleModal={this.toggleModal}
          ></ShipmentInfo>
        )}
      </>
    );
  }
}
ShipmentsTable.propTypes = {
  items: PropTypes.arrayOf(
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
