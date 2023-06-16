import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Backdrop,
  ShipmentForm,
  FormInput,
  FormLabel,
  Modal,
  ModalHeader,
  LineTop,
  LineBottom,
} from './ShipmentInfo.styled';

export class ShipmentInfo extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscapePress);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscapePress);
  }
  handleEscapePress = event => {
    if (event.key === 'Escape') {
      this.props.handleModal();
    }
  };
  handleBackdropClose = event => {
    if (event.target === event.currentTarget) {
      this.props.handleModal();
    }
  };
  render() {
    const { shipment } = this.props;
    return (
      <Backdrop onClick={this.handleBackdropClose}>
        <Modal>
          <LineTop />
          <ModalHeader>SHIPMENT DETAILS</ModalHeader>
          <ShipmentForm>
            <FormLabel htmlFor="">
              OrderNo
              <FormInput
                type="text"
                name="OrderNo"
                disabled
                value={shipment.orderNo}
              />
            </FormLabel>

            <FormLabel htmlFor="">
              Date
              <FormInput
                type="text"
                name="Date"
                disabled
                value={shipment.date}
              />
            </FormLabel>
            <FormLabel htmlFor="">
              Customer
              <FormInput
                type="text"
                name="Customer"
                disabled
                value={shipment.customer}
              />
            </FormLabel>
            <FormLabel htmlFor="">
              TrackingNo
              <FormInput
                type="text"
                name="TrackingNo"
                disabled
                value={shipment.trackingNo}
              />
            </FormLabel>
            <FormLabel htmlFor="">
              Consignee
              <FormInput
                type="text"
                name="Consignee"
                disabled
                value={shipment.consignee}
              />
            </FormLabel>
            <FormLabel htmlFor="">
              Status
              <FormInput
                type="text"
                name="Status"
                disabled
                value={shipment.status}
              />
            </FormLabel>
          </ShipmentForm>
          <LineBottom />
        </Modal>
      </Backdrop>
    );
  }
}

ShipmentInfo.propTypes = {
  shipment: PropTypes.exact({
    orderNo: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    customer: PropTypes.string.isRequired,
    trackingNo: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    consignee: PropTypes.string.isRequired,
  }),
};
