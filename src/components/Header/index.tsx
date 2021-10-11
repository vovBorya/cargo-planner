import React, { ChangeEvent } from 'react';
import { connect } from "react-redux";

import Input from "../Input";
import Button from "../Button";

import {
    filterList,
    setIsListOpen,
    fetchShipments
} from '../../store/shipmentReducer/actions';
import { saveLocalShipments } from '../../services/services';

import './header.scss';

type HeaderProps = {
    shipments: IShipment[]
    isListOpen: boolean
    fetchShipments: () => ShipmentAction
    filterList: (str: string) => ShipmentAction
    setIsListOpen: (val: boolean) => ShipmentAction
};

const Header: React.FC<HeaderProps> = props => (
    <nav className="header navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="header__title navbar-brand" href="#">Cargo Planner</a>

        <Input
            className='header__search-panel mr-sm-2'
            type="text"
            placeholder="Search"
            onChange={(e: ChangeEvent<HTMLInputElement>) => props.filterList(e.target.value)}
        />

        <div className="header__buttons">
            <Button
                className='header__menu-button'
                variant='secondary'
                onClick={() => props.setIsListOpen(!props.isListOpen)}
            >
                <div className='header__menu-icon'/>
            </Button>

            <div className='header__main-buttons'>
                <Button
                    onClick={props.fetchShipments}
                    className='header__button'
                    variant='success'
                    title='Load'
                />
                <Button
                    className='header__button'
                    variant='info'
                    title='Save'
                    onClick={() => saveLocalShipments(props.shipments)}
                    disabled={!props.shipments.length}
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
