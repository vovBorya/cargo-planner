import React from 'react';
import './no-items-box.scss';

type Props = {
  title: string
};

export const NoItemsBox: React.FC<Props> = ({title}) => (
  <div className='no-items-box'>
    <h5 className='no-items-box__title'>{title}</h5>
  </div>
);
