import styled from "styled-components";

export const Container = styled.div`
    width:100vw;
    height: 114px;
    background-color: ${({theme}) => theme.COLORS.DARK_700};
    display: flex;
    padding-top: 60px;
    justify-content: space-around;
    align-items: center;
`

export const MenuButton = styled.button`
    border: none;
    background-color: transparent;
    > svg {
        width: 24px;
    }
`

export const ReceiptContainer = styled.button`
    border: none;
    background-color: transparent;
    position: relative;
    width: 37.5px;
    height: 38px;
    padding: 11px 9px 0 0;

    > svg {
        width: 26px;
    }
    >div {
        position:absolute;
        top: 2px;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        background-color: ${({theme}) => theme.COLORS.TOMATO_100};
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        width: 20px;
        height: 20px;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
    }
`

export const TittleContainer = styled.div`
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    display: flex;
    align-items: center;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    line-height: 160%;
    font-size: 20px;

    >svg{
        width: 25px;
        margin-right: 8px;
    }
`