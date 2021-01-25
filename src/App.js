import React from 'react';

import Calculator from './container/Calculator';

import * as Styled from './styles';

function App() {
    return (
        <Styled.Container>
            <Styled.Heading>
                How much money will you save optimising your Lambda?
            </Styled.Heading>
            <Styled.Description>
                Is it worth micro optimising your Lambda functions for cost and
                how much money will you realistically save (or lose!)? You can{' '}
                <Styled.Link href="https://infinityworks.com/insights/is-it-worth-optimising-your-lambda-functions/">
                    read the full article here
                </Styled.Link>
                .
            </Styled.Description>
            <Calculator />
        </Styled.Container>
    );
}

export default App;
