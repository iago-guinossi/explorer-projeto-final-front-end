import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    padding: 24px;
    width: 210px;
    height: 292px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
    border-radius: 8px;
    >svg {
        position: absolute;
        top: 16px;
        right: 16px;
        width: 24px;
        height: 22px;
    }
`

export const FoodImg = styled.img`
    width: 88px;
    height: 88px;
`

export const FoodName = styled.div`
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
`
export const FoodPrice = styled.div`
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 100%;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 16px;
`

export const AmountContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100px;
    height: 32px;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 100%;
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
