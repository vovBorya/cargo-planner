import React, {MouseEvent} from 'react';

type Props = {
  variant: 'primary' | 'secondary' | 'success' | 'info' | 'warning'
  onClick?: (e: MouseEvent) => void
  title: string | number,
  className?: string
};

export const Button: React.FC<Props> = (props) => {
  return (
    <button
      className={`btn btn-${props.variant} ${props.className}`}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};
