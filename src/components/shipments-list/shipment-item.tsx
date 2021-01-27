import React from 'react';
import {Link} from 'react-router-dom';

type Props = {
  title: string
  id: string
};

const ShipmentItem: React.FC<Props> = ({id, title}) => (
  <Link to={`/${id}`} className='shipments-list__item'>
    {title}
  </Link>
);

export default ShipmentItem;
