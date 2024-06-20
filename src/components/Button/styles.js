import styled from "styled-components";

export const Cointeiner = styled.button`
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    border-radius: 10px;
    width: 100%;
    padding: 12px;
    border: none;
`