import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Input from "../Input";
import Button from "../Button";

import {
    filterList,
    setIsListOpen,
    fetchShipments
} from '../../store/shipmentReducer/actions';
import { saveLocalShipments } from '../../services/services';
import {selectIsListOpen, selectShipments} from "../../store/shipmentReducer/selectors";

import './header.scss';

const Header: React.FC = () => {

    const dispatch = useDispatch();

    const shipments = useSelector(selectShipments);
    const isListOpen = useSelector(selectIsListOpen);

    return (
        <nav className="header navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="header__title navbar-brand" href="/">Cargo Planner</a>

            <Input
                className='header__search-panel mr-sm-2'
                type="text"
                placeholder="Search"
                onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(filterList(e.target.value))}
            />

            <div className="header__buttons">
                <Button
                    className='header__menu-button'
                    variant='secondary'
                    onClick={() => dispatch(setIsListOpen(!isListOpen))}
                >
                    <div className='header__menu-icon'/>
                </Button>

                <div className='header__main-buttons'>
                    <Button
                        title='Load'
                        variant='success'
                        className='header__button'
                        onClick={() => dispatch(fetchShipments())}
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
};

export default Header;
