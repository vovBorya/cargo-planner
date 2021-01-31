import React, {ReactNode} from 'react';
import './no-items-box.scss';

type Props = {
  children: ReactNode
};

export const NoItemsBox: React.FC<Props> = ({children}) => (
  <div className='no-items-box'>
    <h5 className='no-items-box__title'>{children}</h5>
  </div>
);
