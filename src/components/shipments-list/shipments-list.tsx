import React from 'react';
import { connect } from 'react-redux';
import './shipments-list.scss';
import ShipmentItem from "./shipment-item";

type Props = {
  shipments: IShipment[]
};

const ShipmentsList: React.FC<Props> = ({shipments}) => (
  <div className='shipments-list'>
    {shipments.map(item => (
      <ShipmentItem
        id={item.id}
        title={item.name}
      />
    ))}
  </div>
);

const mapStateToProps = (state: ShipmentState) => ({
  shipments: state.tempShipments
});

export default connect(mapStateToProps)(ShipmentsList);
