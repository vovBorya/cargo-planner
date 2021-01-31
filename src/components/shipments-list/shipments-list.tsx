import React from 'react';
import { connect } from 'react-redux';
import './shipments-list.scss';
import {Link} from "react-router-dom";

type Props = {
  shipments: IShipment[]
  isListOpen: boolean
};

const ShipmentsList: React.FC<Props> = ({shipments, isListOpen}) => (
  <div className={`shipments-list ${!isListOpen && 'shipments-list--closed'}`}>
    {shipments.map(({id,name}) => (
      <Link key={id} to={`/${id}`} className='shipments-list__item'>
        {name}
      </Link>
    ))}
  </div>
);

const mapStateToProps = (state: ShipmentState) => ({
  isListOpen: state.isListOpen,
  shipments: state.tempShipments
});

export default connect(mapStateToProps)(ShipmentsList);
