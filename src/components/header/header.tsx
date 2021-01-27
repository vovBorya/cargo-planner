import React from 'react';
import './header.scss';
import Button from "../button";
import {connect} from "react-redux";
import {fetchShipments, filterList} from '../../store/shipmentReducer/actions';

type HeaderProps = {
  filterList: (str: string) => ShipmentAction,
  fetchShipments: () => ShipmentAction
};

const Header: React.FC<HeaderProps> = ({filterList, fetchShipments}) => {
  return (
    <nav className="header navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="header__title navbar-brand" href="#">Cargo Planner</a>

      <input
        className="header__search-panel form-control mr-sm-2"
        type="text"
        placeholder="Search"
        onChange={(e) => filterList(e.target.value)}
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
        />
      </div>
    </nav>
  );
};

const mapDispatchToProps = {
  filterList,
  fetchShipments
}

export default connect(null, mapDispatchToProps)(Header)

