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
  }, [])

  return (
    <div className="app">
      <Header/>

      {!allShipmentsCount && !isLoading
      && (
        <NoItemsBox>
          {`There are no items. \nClick "LOAD" button to get shipments`}
        </NoItemsBox>
      )}
      {isLoading && <Loader className='app__loader'/>}

      {allShipmentsCount && (
        <div className="shipments-content">
          <Router>
            <ShipmentsList/>
            <Route path='/:id?'>
              <ShipmentPage />
            </Route>
          </Router>
        </div>
      )}
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
