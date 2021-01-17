import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background: white;

    width: 90vw;
    max-width: 500px;

    border-radius: 7px;
    box-shadow: 0 50px 100px rgba(50, 50, 93, 0.15),
        0 15px 35px rgba(50, 50, 93, 0.2), 0 5px 15px rgba(0, 0, 0, 0.12);

    @media (max-width: 520px) {
        max-width: 90%;
    }
`;

export const InnerContainer = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 23px 25px;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    margin-bottom: 10px;

    &:last-of-type {
        margin-bottom: 0;
    }
`;

export const Label = styled.label`
    width: 100%;

    color: #555;
    text-align: left;
    margin-bottom: 3px;
`;

export const Input = styled.input`
    position: relative;
    z-index: 1;

    background-image: none;
    background-color: transparent;
    box-shadow: none;
    outline: none;

    width: 100%;
    box-sizing: border-box;
    height: 40px;
    line-height: 40px;
    padding: 5px 10px;
    font-size: 25px;

    color: #666;

    border: 2px solid #aaa;
    border-radius: 7px;

    transition: all 0.6s;

    &:hover {
        border-color: #9854f7;
        color: #444;
    }

    &:focus {
        border-color: #9854f7;
        color: #444;
    }
`;

export const CurrencyInput = styled(Input)`
    padding-left: 30px;
`;

export const SuffixInput = styled.div`
    position: relative;

    &:after {
        position: absolute;
        color: #666;
        content: '${(props) => props.suffix}';
        height: 100%;
        line-height: 40px;
        font-size: 25px;
        left: ${(props) => {
            let padding = 15 * props.length;

            if (props.length < 4) {
                padding = 16 * props.length;
            }

            return `${10 + padding}px`;
        }};
    }
`;

export const PrefixInput = styled.div`
    position: relative;

    &:after {
        position: absolute;
        color: #666;
        content: '${(props) => props.suffix}';
        height: 100%;
        line-height: 40px;
        font-size: 25px;
        left: 12px;
    }
`;

// #95F689 lightest green
// #72F697 darker green
// #5F93CD blue  15px per letter
