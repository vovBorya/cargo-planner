import React from 'react';
import {setShipmentBoxes} from "../../store/shipmentReducer/actions";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import NoItemsBox from "../no-items-box";
import ShipmentDetails from "../shipemt-details/shipment-details";

type PathParamsType = {
  id: string
};

type Props = RouteComponentProps<PathParamsType> & {
  shipments: IShipment[]
  setShipmentBoxes: (id: string, boxes: string) => ShipmentAction
};

const ShipmentPage: React.FC<Props> = ({match, shipments}) => {
  const shipment = shipments.find(item => item.id === match.params.id);
  if (!shipment) return <NoItemsBox>No shipment selected</NoItemsBox>;
  return <ShipmentDetails shipment={shipment}/>;
};

const mapStateToProps = (state: ShipmentState) => ({
  shipments: state.shipments
});

const mapDispatchToProps = {
  setShipmentBoxes
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShipmentPage));