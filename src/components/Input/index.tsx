import React, { ChangeEvent, HTMLAttributes } from 'react';

type IProps = {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => any
    type?: string
    value?: string | number | undefined | readonly string[]
} & HTMLAttributes<HTMLElement>

const Input: React.FC<IProps> = ({type, value, className, ...props}) => (
    <input
        {...props}
        type={type}
        value={value}
        className={`form-control ${className}`}
    />
);

export default Input;