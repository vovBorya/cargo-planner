import React, {MouseEvent} from 'react';

type Props = {
  variant: 'primary' | 'secondary' | 'success' | 'info' | 'warning'
  onClick?: (e: MouseEvent) => void
  title: string | number,
  className?: string,
  disabled?: boolean
};

export const Button: React.FC<Props> = (props) => (
  <button
    className={`btn btn-${props.variant} ${props.className}`}
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {props.title}
  </button>
);

Button.defaultProps = {
  className: '',
  disabled: false,
}
