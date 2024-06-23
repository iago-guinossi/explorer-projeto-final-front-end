import styled from "styled-components";

export const Container = styled.div`
    width:100vw;
    height: 104px;
    padding: 28px 123px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.DARK_700};
    @media screen and (max-width: 780px){
        height: 114px;
        padding: 56px 28px 24px;
    }
`

export const MenuButton = styled.button`
    display: none;
    @media screen and (max-width: 780px){
        display: block;
        border: none;
        background-color: transparent;
        > svg {
            width: 24px;
        }
    }

`

export const ReceiptContainer = styled.button`
    width: 216px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};
    border-radius: 5px;
    margin-left: 32px;
    gap: 8px;
    flex-direction: row;
    flex-shrink: 0;
    border: none;
    @media screen and (max-width: 780px){
        margin: none;
        background-color: transparent;
        position: relative;
        width: 37.5px;
        height: 38px;
        padding: 11px 9px 0 0;
    }

    > svg {
        width: 26px;
    }
    >div.mobile {
        display:none;
        @media screen and (max-width: 780px){
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
    }
    >div.desktop {
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        @media screen and (max-width: 780px){
            display: none;
        }
    }
`

export const TittleContainer = styled.div`
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    margin-right: 43px;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 24px;

    @media screen and (max-width: 780px){
        font-size: 20px;
    }

    >svg{
        width: 25px;
        margin-right: 8px;
    }
`

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: end;
    @media screen and (max-width: 780px){
        display: none;
    }
`

export const SignOutButton = styled.button`
    margin-left:32px;
    background-color: transparent;
    border: none;
    >svg{
        width: 22px;
        height: 22px;
    }
    @media screen and (max-width: 780px){
        display:none;
    }
`