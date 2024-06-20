import styled from "styled-components";

export const Container = styled.button`
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border: none;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px
`