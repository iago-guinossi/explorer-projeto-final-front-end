import { Container, Copyright, TittleContainer } from "./styles";

import Icon from "../../assets/polygonDark.svg?react"

export function Footer(){
    return (
        <Container>
            <TittleContainer>
                <Icon/>
                food explorer
            </TittleContainer>
            <Copyright>
                © 2023 - Todos os direitos reservador.
            </Copyright>
        </Container>
    )
}