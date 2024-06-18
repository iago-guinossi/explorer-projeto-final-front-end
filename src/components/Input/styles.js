import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.DARK_900};
    color: ${({theme}) => theme.COLORS.LIGHT_500};
    border-radius: 10px;

    > input {
        height: 36px;
        width: 100%;
        padding: 12px;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        background: transparent;
        border: 0;

        &:placeholder {
            color: ${({theme}) => theme.COLORS.LIGHT_500};
        }
    }

    > svg {
        margin: 0 14px;
    }
`