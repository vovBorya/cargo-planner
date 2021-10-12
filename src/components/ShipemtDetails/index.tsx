import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import styled from "styled-components";

import Input from "../Input";
import Button from "../Button";
import BaysNumber from '../BaysNumber';

import {
    setIsListOpen,
    setShipmentBoxes
} from '../../store/shipmentReducer/actions';

const Wrapper = styled.div`
    width: 100%;
    padding: 1rem 2rem;
`;

const Name = styled.h4`
    padding: 10px;
`;

const Email = styled.a`
    padding: 10px;
`;

type Props = {
    shipment: IShipment
}

const ShipmentDetails: React.FC<Props> = ({ shipment }) => {

    const dispatch = useDispatch();

    const [boxesInputValue, setBoxesInputValue] = useState<string>('');
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

    useEffect(() => {
        setBoxesInputValue(shipment.boxes ?? '');
        dispatch(setIsListOpen(false));
    }, [shipment.id, dispatch, shipment.boxes])

    const handleInputChange = (value: string) => {
        const newValue = value.replace(/[A-Za-z]/i, '');
        if (newValue === boxesInputValue) return;
        setButtonDisabled(false);
        setBoxesInputValue(newValue);
    };

    return (
        <Wrapper className='shipment-details'>
            <Name>
                {shipment.name}
            </Name>
            <Email>
                {shipment.email}
            </Email>
            <BaysNumber {...{boxesInputValue}}/>
            <Input
                value={boxesInputValue ?? ''}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.value)}
            />
            <Button
                title='Edit'
                className='mt-2'
                variant='primary'
                disabled={buttonDisabled}
                onClick={() => dispatch(setShipmentBoxes(shipment.id, boxesInputValue))}
            />
        </Wrapper>
    );
};

export default ShipmentDetails;