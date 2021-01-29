import React, {ChangeEvent} from 'react';
import './header.scss';
import Button from "../button";
import {connect} from "react-redux";
import {
  filterList,
  fetchShipments
} from '../../store/shipmentReducer/actions';
import { saveLocalShipments } from '../../services/services';
import Input from "../input";

type HeaderProps = {
  shipments: IShipment[]
  fetchShipments: () => ShipmentAction
  filterList: (str: string) => ShipmentAction
};


const Header: React.FC<HeaderProps> = ({
                                         shipments,
                                         filterList,
                                         fetchShipments
                                       }) => (
  <nav className="header navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="header__title navbar-brand" href="#">Cargo Planner</a>

    <Input
      className='header__search-panel mr-sm-2'
      type="text"
      placeholder="Search"
      onChange={(e: ChangeEvent<HTMLInputElement>) => filterList(e.target.value)}
    />

    <div className="header__buttons">
      <Button
        onClick={fetchShipments}
        className='header__button'
        variant='success'
        title='Load'
      />
      <Button
        className='header__button'
        variant='info'
        title='Save'
        onClick={() => saveLocalShipments(shipments)}
        disabled={!shipments.length}
      />
    </div>
  </nav>
);

const mapStateToProps = (state: ShipmentState) => ({
  shipments: state.shipments
});

const mapDispatchToProps = {
  filterList,
  fetchShipments
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

