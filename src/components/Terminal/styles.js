import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 90vw;
    max-width: 1000px;
    border-radius: 10px 10px 0 0;

    margin-top: 40px;

    box-shadow: 0 50px 100px rgba(50, 50, 93, 0.15),
        0 15px 35px rgba(50, 50, 93, 0.2), 0 5px 15px rgba(0, 0, 0, 0.12);
`;

export const Bar = styled.div`
    height: 28px;
    background-color: #e4e3e5;

    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const Button = styled.div`
    width: 14px;
    height: 14px;
    border-radius: 50%;
    margin-left: 9px;
`;

export const GreenButton = styled(Button)`
    background-color: #28c840;
`;

export const AmberButton = styled(Button)`
    background-color: #fdbc2e;
`;

export const RedButton = styled(Button)`
    background-color: #fb5f57;
`;

export const Window = styled.div`
    background-color: #2c2d3d;
    border-radius: 0 0 4px 4px;

    font-family: monospace, Monaco, Consolas, Lucida Console;
    font-size: 18px;

    min-height: 400px;
    width: 100%;

    display: flex;
    flex-direction: column;
`;

export const Command = styled.div`
    text-align: left;

    color: #f7f7f7;

    margin: 25px 35px;
    line-height: 24px;
`;
