import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {Route, BrowserRouter as Router} from "react-router-dom";
import './App.scss';
import Header from "./components/header";
import {fetchShipments} from "./store/shipmentReducer/actions";
import ShipmentsList from './components/shipments-list';
import NoItemsBox from "./components/no-items-box";
import Loader from "./components/loader";

type Props = {
  allShipmentsCount: number
  fetchShipments: DispatchType
  isLoading: boolean
};

const App: React.FC<Props> = ({isLoading, fetchShipments, allShipmentsCount}) => {

  useEffect(() => {

  }, [])

  return (
    <div className="app">
      <Header />

      {allShipmentsCount === 0 && !isLoading
      && <NoItemsBox title={`There are no items. \nClick "LOAD" button to get shipments`} />}
      {isLoading && <Loader className='app__loader'/>}

      <Router>
        <ShipmentsList />
        <Route/>
      </Router>
    </div>
  );
};

const mapStateToProps = (state: ShipmentState) => ({
  allShipmentsCount: state.shipments.length,
  isLoading: state.isLoading,
});

const mapDispatchToProps = {
  fetchShipments
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
