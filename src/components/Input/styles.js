import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    text-align: start;
    > span {
        display: block;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-style: normal;
        line-height:160%;
        font-size: 16px;
        margin-bottom: 8px;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
`

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    border-radius: 10px;

    > input {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-style: normal;
        line-height:160%;
        font-size: 16px;
        height: 48px;
        width: 100%;
        padding: 12px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background: transparent;
        border: 0;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }

    > svg {
        margin: 0 14px;
    }
`