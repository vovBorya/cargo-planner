import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Route, BrowserRouter as Router} from "react-router-dom";

import Header from "./components/Header";
import Loader from "./components/Loader";
import NoItemsBox from "./components/NoItemsBox";
import ShipmentPage from "./components/ShipmentPage";
import ShipmentsList from './components/ShipmentsList';

import {selectAllShipmentsCount, selectIsLoading} from "./store/shipmentReducer/selectors";
import {fetchShipmentsSuccess} from "./store/shipmentReducer/actions";

import './App.scss';
import {getLocalShipments} from "./services/services";

const App: React.FC = () => {

    const allShipmentsCount = useSelector(selectAllShipmentsCount);
    const isLoading = useSelector(selectIsLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchShipmentsSuccess(getLocalShipments()));
    }, [dispatch]);

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
                            <ShipmentPage/>
                        </Route>
                    </Router>
                </div>
            )}
        </div>
    );
};

export default App;
