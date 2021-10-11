import React from "react";
import styled from "styled-components";

const Wrapper = styled.p`
    padding: 10px;
`;

type Props = {
    boxesInputValue: string
};

const BaysNumber: React.FC<Props> = ({ boxesInputValue }) => {

    const number = boxesInputValue
        ? Math.ceil(boxesInputValue.split(',').map((i: string) => +i).reduce((a: number, b: number) => a + b) / 10)
        : 0;

    return (
        <Wrapper>
            Number of required cargo bays <b>{number}</b>
        </Wrapper>
    )
};

export default BaysNumber;
