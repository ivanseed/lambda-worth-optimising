import styled from 'styled-components';

const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    
    box-sizing: border-box;
    width: 100px;
    padding: 3px 7px;
        
    span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export const Container = styled.div`
    overflow: scroll;
    max-width: 90vw;
    
    margin-top: 40px;
    margin-bottom: 40px;
    
    background: white;
    border-radius: 7px;
    box-shadow: 0 50px 100px rgba(50,50,93,.15), 0 15px 35px rgba(50,50,93,.2), 0 5px 15px rgba(0,0,0,.12);
`;

export const Inner = styled.div`
    display: grid;
    grid-template-columns: 30px 80px 100px 100px 100px 100px 100px;
`;

export const Column = styled.div`
    display: grid;
    grid-template-rows: ${props => {
        let rows = "";
        
        for (let i = 1; i <= props.count; i++) {
            rows += " auto"
        }
        
        return rows;
    }};
    
    width: 100%;
    
    grid-gap: 2px;
    
    font-size: 25px;
`;

export const LeftColumn = styled.div`
    display: grid;
    grid-template-rows: 30px auto;
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
`;