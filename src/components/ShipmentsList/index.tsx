import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import { selectIsListOpen, selectShipments } from "../../store/shipmentReducer/selectors";

import './shipments-list.scss';

type WrapperProps = {
    isListOpen?: boolean
};

const Wrapper = styled.div`
  width: 300px;
  padding: 20px;
  height: 100vh;
  overflow: auto;
  transition: .4s;

  @media screen and (max-width: 990px) {
    position: fixed;
    background: white;
    ${(props: WrapperProps) => {
      if (!props.isListOpen) {
        return `
            width: 0;
            padding: 0;
            transition: .4s;
        `;
      }
    }}
  }
`;

const ShipmentsList: React.FC = () => {

    const shipments = useSelector(selectShipments);
    const isListOpen = useSelector(selectIsListOpen);

    return (
        <Wrapper {...{isListOpen}}>
            {shipments.map(({id, name}) => (
                <Link
                    key={id}
                    to={`/${id}`}
                    className='shipments-list__item'
                >
                    {name}
                </Link>
            ))}
        </Wrapper>
    );
};

export default ShipmentsList;
