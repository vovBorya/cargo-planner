import React, {ChangeEvent, useEffect, useState} from 'react';
import {connect} from "react-redux";
import Input from "../input";
import './shipment-details.scss';
import {setShipmentBoxes} from '../../store/shipmentReducer/actions';
import Button from "../button";

type Props = {
  shipment: IShipment
  setShipmentBoxes: (id: string, boxes: string) => ShipmentAction
};

const ShipmentDetails: React.FC<Props> = ({shipment, setShipmentBoxes}) => {

  const [boxesInputValue, setBoxesInputValue] = useState<string>('');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    setBoxesInputValue(shipment.boxes ?? '');
  }, [shipment.id])

  const getBaysNumber = (boxes: string | null): number => {
    if (!boxes) return 0;
    return Math.ceil(boxes.split(',').map(i => +i).reduce((a, b) => a + b) / 10);
  };

  const handleInputChange = (value: string) => {
    setButtonDisabled(false);
    setBoxesInputValue(value);
  }

  return (
    <div className='shipment-details'>
      <h4 className='shipment-details__name'>{shipment.name}</h4>
      <a className='shipment-details__email'>{shipment.email}</a>
      <p className='shipment-details__bays-number'>
        Number of required cargo bays <b>{getBaysNumber(boxesInputValue)}</b>
      </p>
      <Input
        value={boxesInputValue ?? ''}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.value)}
      />

      <Button
        disabled={buttonDisabled}
        title='Edit'
        className='mt-2'
        variant='primary'
        onClick={() => setShipmentBoxes(shipment.id, boxesInputValue)}
      />
    </div>
  );
};

const mapStateToProps = (state: ShipmentState) => ({
  shipments: state.shipments
});

const mapDispatchToProps = {
  setShipmentBoxes
};

export default connect(mapStateToProps, mapDispatchToProps)(ShipmentDetails);