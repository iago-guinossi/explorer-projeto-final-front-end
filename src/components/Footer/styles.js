import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height:77px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.DARK_600};
    padding: 0 123px;
    @media screen and (max-width: 780px){
        padding: 0 28px;
    }
`

export const TittleContainer = styled.div`
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.LIGHT_700};
    display: flex;
    align-items: center;
    font-size: 24px;
    @media screen and (max-width: 780px){
        font-size: 15px;
    }
    > svg{
        width: 30px;
        margin-right: 10px;
        @media screen and (max-width: 780px){
            width: 22px;
            height: 18px;
            margin-right: 6.5px;
        }
    }
`

export const Copyright = styled.div`
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.LIGHT_200};
    font-size: 14px;
    line-height: 160%;
    @media screen and (max-width: 780px){
        font-size: 12px;
    }
`