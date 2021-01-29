import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {Route, BrowserRouter as Router} from "react-router-dom";
import './App.scss';
import Header from "./components/header";
import {fetchShipments, fetchShipmentsSuccess} from "./store/shipmentReducer/actions";
import ShipmentsList from './components/shipments-list';
import NoItemsBox from "./components/no-items-box";
import Loader from "./components/loader";
import {getLocalShipments} from "./services/services";
import ShipmentDetails from "./components/shipemt-details/shipment-details";
import ShipmentPage from "./components/shipment-page/shipment-page";



type Props = {
  allShipmentsCount: number
  fetchShipmentsSuccess: (shipments: IShipment[]) => void
  isLoading: boolean
};

const App: React.FC<Props> = ({
                                isLoading,
                                fetchShipmentsSuccess,
                                allShipmentsCount
                              }) => {

  useEffect(() => {
    fetchShipmentsSuccess(getLocalShipments());
    console.log('getLocalShipments()', getLocalShipments());
  }, [])

  return (
    <div className="app">
      <Header/>

      {!allShipmentsCount && !isLoading
      && <NoItemsBox title={`There are no items. \nClick "LOAD" button to get shipments`}/>}
      {isLoading && <Loader className='app__loader'/>}

      <div className="shipments-content">
        <Router>
          <ShipmentsList/>
          <Route path='/:id?'>
            <ShipmentPage />
          </Route>
        </Router>
      </div>
    </div>
  );
};

const mapStateToProps = (state: ShipmentState) => ({
  allShipmentsCount: state.shipments.length,
  isLoading: state.isLoading,
});

const mapDispatchToProps = {
  fetchShipments,
  fetchShipmentsSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
