import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 780px){
        flex-direction: column;
        justify-content: center;
        padding: 0 47px 0 65px;
        gap: 73px;
    }
`

export const Title = styled.div`
    display:flex;
    align-items:center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 42px;
    > svg{
        margin-right: 11px;
    }
    @media screen and (max-width: 780px){
        font-size: 40px;
        
    }
    @media screen and (max-width: 585px){
        align-self: flex-start;
    }    
`

export const InputContainer = styled.div`
    display: flex;
    max-width: 476px;
    width: 100%;
    gap: 32px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.DARK_700};
    padding: 64px;
    border-radius: 16px;
    @media screen and (max-width: 780px){
        background-color: transparent;
        padding: 0;
    }
`

export const SubTittle = styled.span`
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
    @media screen and (max-width: 780px){
        display: none;
    }
`