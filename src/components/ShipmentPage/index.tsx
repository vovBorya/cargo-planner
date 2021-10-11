import React from 'react';
import { useSelector } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";

import NoItemsBox from "../NoItemsBox";
import ShipmentDetails from "../ShipemtDetails";

import { selectShipments } from "../../store/shipmentReducer/selectors";

type PathParamsType = {
    id: string
};

type Props = RouteComponentProps<PathParamsType> & {
    shipments: IShipment[]
};

const ShipmentPage: React.FC<Props> = ({match}) => {
    const shipments = useSelector(selectShipments);

    const shipment = shipments.find(item => item.id === match.params.id);

    if (!shipment) return <NoItemsBox>No shipment selected</NoItemsBox>;

    return <ShipmentDetails {...{shipment}}/>;
};

export default withRouter(ShipmentPage);
