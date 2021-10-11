import React, {ReactNode} from 'react';
import styled from "styled-components";

type Props = {
    children: ReactNode
};

const Wrapper = styled.div`
    margin: 0 auto; 
`;

const Title = styled.h5`
    padding: 28px;
    text-align: center;
`;

const NoItemsBox: React.FC<Props> = ({children}) => (
    <Wrapper>
        <Title>
            {children}
        </Title>
    </Wrapper>
);

export default NoItemsBox;
