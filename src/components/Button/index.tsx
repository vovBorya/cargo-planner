import React, { MouseEvent, ReactNode } from 'react';

type Props = {
    variant: 'primary' | 'secondary' | 'success' | 'info' | 'warning'
    onClick?: (e: MouseEvent) => void
    title?: string | number,
    className?: string,
    disabled?: boolean,
    children?: ReactNode
};

const Button: React.FC<Props> = props => (
    <button
        className={`btn btn-${props.variant} ${props.className}`}
        onClick={props.onClick}
        disabled={props.disabled}
    >
        {props.children ?? props.title}
    </button>
);

Button.defaultProps = {
    className: '',
    disabled: false,
};

export default Button;
