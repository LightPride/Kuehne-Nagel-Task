// in case if server was overloaded
import data from './shipments.json';
// if server is okay
// import * as API from 'api';
import { ShipmentsTable } from './ShipmentsTable/ShipmentsTable';
import { Component } from 'react';

export class App extends Component {
  state = {
    // in case if server was overloaded
    //shipments: data
    //if server is okay
    shipments: data,
    isLoading: false,
    error: false,
  };

  // async componentDidMount() {
  //   try {
  //     this.setState({ isLoading: true });
  //     const shipments = await API.getShipments();
  //     this.setState({ shipments, isLoading: false });
  //   } catch (error) {
  //     this.setState({ error: true, isLoading: false });
  //     console.log(error);
  //   }
  // }

  deleteShipment = async orderNo => {
    // (in case if we want to delete data from API server too)
    // await API.deleteShipments(orderNo);
    this.setState(prevState => ({
      shipments: prevState.shipments.filter(
        shipment => shipment.orderNo !== orderNo
      ),
    }));
  };

  render() {
    const { shipments } = this.state;
    return (
      <>
        {this.state.error && <p>Something went wrong...</p>}
        {this.state.isLoading ? (
          'Loading'
        ) : (
          <ShipmentsTable data={shipments} onDelete={this.deleteShipment} />
        )}
      </>
    );
  }
}
