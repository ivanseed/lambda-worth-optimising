import React from 'react';

import * as Styled from './styles';

const getSaving = saving => {
    if (saving < 0) {
        return `-$${Math.abs(saving)}`;
    }

    return `$${saving}`;
};

const Table = ({ data }) => {
    return (
        <Styled.Container>
            <Styled.Inner>
                <Styled.LeftColumn>
                    <Styled.LeftLabel>
                        New execution time
                    </Styled.LeftLabel>
                </Styled.LeftColumn>
                <Styled.Column count={data.times.length}>
                    <Styled.Spacer />
                    {data.times.map(time => (
                        <Styled.Timing key={time}>
                            <span>{time} ms</span>
                        </Styled.Timing>
                    ))}
                </Styled.Column>
                {Object.keys(data.savings).map((hour, hi) => (
                    <Styled.Column key={hi} count={data.times.length}>
                        <Styled.Hours>{hour} hour</Styled.Hours>
                        {data.savings[hour].map((saving, si) => (
                            <Styled.Savings key={`${hi}-${si}`}>
                                {getSaving(saving)}
                            </Styled.Savings>
                        ))}
                    </Styled.Column>
                ))}
            </Styled.Inner>
        </Styled.Container>
    )
};

export default Table;