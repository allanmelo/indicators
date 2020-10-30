import styled, { css } from 'styled-components';

interface StyledBoxProps {
    boxColor: string;
}

export const Container = styled.div`
    position: relative;
    margin: 10px;
`

export const Box = styled.div<StyledBoxProps>`
    height: 100px;
    width: 260px;
    border: 3px solid;
    border-radius: 10px;
    ${({boxColor}) => css`background: ${boxColor}; border-color: ${boxColor}`}
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Name = styled.div`
    width: 100%;
    height: 35px;

    display: flex;
    align-items: center;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    
    background: #f7f1ee;

    header {
        padding-left: 15px;
        font-weight: 500;
        letter-spacing: 1px;
        text-transform: lowercase
    }

`;

export const Units = styled.div`
    color: #fff;

    p {
        position: relative;
        top: 5px;
        padding-left: 15px;
        font-weight: 100;
        letter-spacing: 2px;
        text-transform: uppercase
    };
    span {
        position: relative;
        bottom: 5px;
        padding-left: 15px;
        font-size: 30px;
        letter-spacing: 1px;
    }
`;

export const Image = styled.div`
    color: #fff;
    padding-right: 15px;
`;

export const More = styled.div`
    position: absolute;
    top: -8px;
    right: 0px;
    
    width: 40%;
    height: 46px;
    
    display: flex;
    align-items: center;

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    
    background: #000;

    color: #fff;

    p {
        position: relative;

        font-size: 12px;
        padding: 0 20px;
        text-transform: uppercase;

        i {
            position: absolute;     
            top: -5px;
        }
    };
`;
