import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    padding: 24px;
    width: 304px;
    height: 462px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
    border-radius: 8px;
    @media screen and (max-width: 780px){
        width: 210px;
        height: 292px;

    }
    >svg {
        position: absolute;
        top: 16px;
        right: 16px;
        width: 24px;
        height: 22px;
    }
`

export const FoodImg = styled.img`
    width: 176px;
    height: 176px;
    @media screen and (max-width: 780px){
    width: 88px;
    height: 88px;
    }
`

export const FoodName = styled.div`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    @media screen and (max-width: 780px){
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
    }
`

export const FoodInfo = styled.div`
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    text-align: center;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    @media screen and (max-width: 780px){
        display: none;
    }
`

export const FoodPrice = styled.div`
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 160%;
    @media screen and (max-width: 780px){
        font-size: 16px;
        line-height: 100%;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    width: 208px;
    @media screen and (max-width: 780px){
        width: 100%;
        flex-direction: column;
    }
`

export const AmountContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    width: 100px;
    height: 32px;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 160%;
    @media screen and (max-width: 780px){
        font-size: 16px;
        font-weight: 400;
        line-height: 100%;
    }
`

export const AmountButton = styled.button`
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    display: flex;
    align-items: center;
    padding: 0 auto;
    background-color: transparent;
    border: none;
    >svg {
        width: 18px;
        height: 18px;
    }
`
