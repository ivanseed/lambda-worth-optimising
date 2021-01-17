import React, { useReducer } from 'react';
import Form from '../../components/Form';
import Table from '../../components/Table';
import { Heading } from './styles';

const defaultState = {
    price: 0.0000166667,
    invocations: 100,
    memory: 1024,
    execution: 200,
    lifespan: 18,
    salary: 25,
    hours: [1, 2, 4, 8, 16],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'update':
            return {
                ...state,
                [action.key]: action.value,
            };
        default:
            throw new Error();
    }
};

const Calculator = () => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    const updateValue = (key, value) => {
        dispatch({
            type: 'update',
            key,
            value,
        });
    };

    const calcTimes = () => {
        // 43800 minutes in a month
        const totalInvocations = state.invocations * 43800 * state.lifespan;
        const oldCost =
            (state.price / 1000) *
            (state.memory / 1024) *
            state.execution *
            totalInvocations;

        const data = {
            times: [],
            savings: {},
        };
        let last = 0;

        for (let i = 1; i < 10; i += 1) {
            const time = Math.ceil(state.execution * ((10 - i) / 10));

            if (time !== last) {
                last = time;
                data.times.push(time);
            }
        }

        state.hours.forEach((hour) => {
            const savings = data.times.map((time) => {
                const newCost =
                    (state.price / 1000) *
                    (state.memory / 1024) *
                    time *
                    totalInvocations;
                const devCost = hour * state.salary;

                return Math.round(oldCost - newCost - devCost);
            });

            data.savings[hour] = savings;
        });

        return data;
    };

    const data = calcTimes();

    return (
        <>
            <Form {...state} updateValue={updateValue} />
            <Heading>Cost Savings</Heading>
            <Table data={data} />
        </>
    );
};

export default Calculator;
