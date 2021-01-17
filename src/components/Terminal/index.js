import React from 'react';

import * as Styled from './styles';

const Terminal = ({ children }) => (
    <Styled.Container>
        <Styled.Bar>
            <Styled.RedButton />
            <Styled.AmberButton />
            <Styled.GreenButton />
        </Styled.Bar>
        <Styled.Window>
            <Styled.Command>&#62;</Styled.Command>
            {children}
        </Styled.Window>
    </Styled.Container>
);

export default Terminal;
