import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100vw;
    height: 114px;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    background-color: ${({theme}) => theme.COLORS.DARK_700};
    padding: 56px 28px 24px;
    display: flex;
    align-items: center;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 22px;
    >button{
        margin-right: 16px;
        background-color: transparent;
        border: none;
        >svg{
            width: 18px;
        }
    }
`

export const Contentcontainer = styled.div`
    width:100vw;
    min-height: calc( 100vh - 191px);
    padding: 36px 28px 14px;
    >button {
        width:100%;
        text-align: start;
        font-family: "Poppins", sans-serif;
        font-weight: 300;
        font-size: 24px;
        line-height: 140%;
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        background-color: transparent;
        padding: 10px;
        border:none;
        border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_1000};
    }
`