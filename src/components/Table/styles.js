import styled from 'styled-components';

const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;

    box-sizing: border-box;
    width: 110px;
    padding: 3px 7px;

    transition: all 0.6s;

    span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export const Container = styled.div`
    overflow: scroll;
    max-width: 90vw;

    margin-bottom: 40px;
`;

export const Inner = styled.div`
    display: grid;
    grid-template-columns: 30px 80px 110px 110px 110px 110px 110px;
`;

export const Column = styled.div`
    display: grid;
    grid-template-rows: ${(props) => {
        let rows = '';

        for (let i = 1; i <= props.count; i += 1) {
            rows += ' auto';
        }

        return rows;
    }};

    width: 100%;
    grid-gap: 2px;
    font-size: 25px;

    background: white;

    div {
        border-bottom: solid 1px #bbb;
    }

    div:last-child {
        border-bottom: none;
    }

    &:last-child {
        border-top-right-radius: 7px;
        border-bottom-right-radius: 7px;
    }
`;

export const LeftColumn = styled.div`
    display: grid;
    grid-template-rows: 30px auto;
`;

export const TimingColumn = styled(Column)`
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
`;

export const LeftLabel = styled.span`
    display: block;

    font-size: 16px;
    color: #555;

    writing-mode: vertical-rl;
    transform: rotate(180deg);

    grid-row: 2/2;
`;

export const Spacer = styled(Item)`
    width: 80px;
`;

export const Timing = styled(Item)`
    font-size: 20px;

    width: 80px;

    font-size: 16px;
    color: #555;
`;

export const Hours = styled(Item)`
    font-size: 16px;
    color: #555;
`;

export const Savings = styled(Item)`
    color: ${(props) => (props.positive ? '#357a38' : '#f44336')};
    &:hover {
        color: #9854f7;
    }
`;

export const Heading = styled.div`
    width: 660px;

    padding-left: 110px;
    margin-bottom: 7px;

    font-size: 16px;
    color: #555;

    box-sizing: border-box;
`;
