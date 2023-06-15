import { Component } from 'react';
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
    const { orderNo, date, customer, trackingNo, status, consignee } =
      this.props;
    return (
      <Backdrop onClick={this.handleBackdropClose}>
        <Modal>
          <LineTop />
          <ModalHeader>SHIPMENT DETAILS</ModalHeader>
          <ShipmentForm>
            <FormLabel htmlFor="">
              OrderNo
              <FormInput type="text" name="OrderNo" disabled value={orderNo} />
            </FormLabel>

            <FormLabel htmlFor="">
              Date
              <FormInput type="text" name="Date" disabled value={date} />
            </FormLabel>
            <FormLabel htmlFor="">
              Customer
              <FormInput
                type="text"
                name="Customer"
                disabled
                value={customer}
              />
            </FormLabel>
            <FormLabel htmlFor="">
              TrackingNo
              <FormInput
                type="text"
                name="TrackingNo"
                disabled
                value={trackingNo}
              />
            </FormLabel>
            <FormLabel htmlFor="">
              Consignee
              <FormInput
                type="text"
                name="Consignee"
                disabled
                value={consignee}
              />
            </FormLabel>
            <FormLabel htmlFor="">
              Status
              <FormInput type="text" name="Status" disabled value={status} />
            </FormLabel>
          </ShipmentForm>
          <LineBottom />
        </Modal>
      </Backdrop>
    );
  }
}
