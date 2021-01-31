import React, {ChangeEvent} from 'react';
import './header.scss';
import Button from "../button";
import {connect} from "react-redux";
import {
  filterList,
  setIsListOpen,
  fetchShipments
} from '../../store/shipmentReducer/actions';
import { saveLocalShipments } from '../../services/services';
import Input from "../input";
import MenuIcon from '@material-ui/icons/Menu';

type HeaderProps = {
  shipments: IShipment[]
  isListOpen: boolean
  fetchShipments: () => ShipmentAction
  filterList: (str: string) => ShipmentAction
  setIsListOpen: (val: boolean) => ShipmentAction
};

const Header: React.FC<HeaderProps> = ({
                                         shipments,
                                         isListOpen,
                                         filterList,
                                         setIsListOpen,
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
        className='header__menu-button'
        variant='secondary'
        onClick={() => setIsListOpen(!isListOpen)}
      >
        <MenuIcon  />
      </Button>

      <div className='header__main-buttons'>
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
    </div>
  </nav>
);

const mapStateToProps = (state: ShipmentState) => ({
  shipments: state.shipments,
  isListOpen: state.isListOpen
});

const mapDispatchToProps = {
  filterList,
  setIsListOpen,
  fetchShipments
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

