import React from 'react';
import { useSelector } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";

import NoItemsBox from "../NoItemsBox";
import ShipmentDetails from "../ShipemtDetails";

import { selectShipments } from "../../store/shipmentReducer/selectors";

type PathParamsType = {
    id: string
};

const ShipmentPage: React.FC<RouteComponentProps<PathParamsType>> = ({match}) => {
    const shipments = useSelector(selectShipments);

    const shipment = shipments.find(item => item.id === match.params.id);

    if (!shipment) return <NoItemsBox>No shipment selected</NoItemsBox>;

    return <ShipmentDetails {...{shipment}}/>;
};

export default withRouter(ShipmentPage);
