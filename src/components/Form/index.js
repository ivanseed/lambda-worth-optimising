import React from 'react';

import * as Styled from './styles';

const Form = ({ price, invocations, memory, execution, lifespan, salary, updateValue }) => {
    const getMonthSuffix = () => {
        if (parseInt(lifespan, 10) === 1) {
            return 'month';
        }

        return 'months';
    };

    return (
        <Styled.Container>
            <Styled.InnerContainer>
                <Styled.Item>
                    <Styled.Label htmlFor="price">Price per GB Second</Styled.Label>
                    <Styled.PrefixInput suffix="$">
                        <Styled.CurrencyInput
                            id="price"
                            type="number"
                            min="0"
                            value={price}
                            onChange={e => {
                                updateValue('price', e.target.value);
                            }}
                        />
                    </Styled.PrefixInput>
                </Styled.Item>
                <Styled.Item>
                    <Styled.Label htmlFor="invocations">Invocations per minute</Styled.Label>
                    <Styled.Input
                        id="invocations"
                        type="number"
                        step="1"
                        min="0"
                        value={invocations}
                        onChange={e => {
                            updateValue('invocations', e.target.value);
                        }}
                    />
                </Styled.Item>
                <Styled.Item>
                    <Styled.Label htmlFor="memory">Memory configuration</Styled.Label>
                    <Styled.SuffixInput suffix="MB" length={memory.toString().length}>
                        <Styled.Input
                            id="memory"
                            type="number"
                            step="1"
                            min="128"
                            max="10240"
                            value={memory}
                            onChange={e => {
                                updateValue('memory', e.target.value);
                            }}
                            onBlur={() => {
                                if (memory < 128) {
                                    updateValue('memory', 128);
                                }

                                if (memory > 10240) {
                                    updateValue('memory', 10240);
                                }
                            }}
                        />
                    </Styled.SuffixInput>
                </Styled.Item>
                <Styled.Item>
                    <Styled.Label htmlFor="execution">Current execution time</Styled.Label>
                    <Styled.SuffixInput suffix="ms" length={execution.toString().length}>
                        <Styled.Input
                            id="execution"
                            type="number"
                            step="1"
                            min="0"
                            value={execution}
                            onChange={e => {
                                updateValue('execution', e.target.value);
                            }}
                            onBlur={() => {
                                if (execution > 900000) {
                                    updateValue('execution', 900000);
                                }

                                if (!execution || execution < 0) {
                                    updateValue('execution', 1);
                                }
                            }}
                        />
                    </Styled.SuffixInput>
                </Styled.Item>
                <Styled.Item>
                    <Styled.Label htmlFor="lifespan">Lifespan of function</Styled.Label>
                    <Styled.SuffixInput suffix={getMonthSuffix()} length={lifespan.toString().length}>
                        <Styled.Input
                            id="lifespan"
                            type="number"
                            step="1"
                            min="0"
                            value={lifespan}
                            onChange={e => {
                                updateValue('lifespan', e.target.value);
                            }}
                            onBlur={() => {
                                if (!lifespan || lifespan < 0) {
                                    updateValue('lifespan', 1);
                                }
                            }}
                        />
                    </Styled.SuffixInput>
                </Styled.Item>
                <Styled.Item>
                    <Styled.Label htmlFor="salary">Development cost per hour</Styled.Label>
                    <Styled.PrefixInput suffix="$">
                        <Styled.CurrencyInput
                            id="salary"
                            type="number"
                            step="1"
                            min="0"
                            value={salary}
                            onChange={e => {
                                updateValue('salary', e.target.value);
                            }}
                            onBlur={() => {
                                if (!salary || salary < 0) {
                                    updateValue('salary', 0);
                                }
                            }}
                        />
                    </Styled.PrefixInput>
                </Styled.Item>
            </Styled.InnerContainer>
        </Styled.Container>
    );
};

export default Form;