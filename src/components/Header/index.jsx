import { Container, MenuButton, ReceiptContainer, TittleContainer } from "./styles";

import Icon from "../../assets/polygon.svg?react"
import Receipt from "../../assets/receipt.svg?react"
import Menu from "../../assets/menu.svg?react"

export function Header(){
    return(
        <Container>
            <MenuButton>
                <Menu/>
            </MenuButton>
            <TittleContainer>
                <Icon/>
                food explorer
            </TittleContainer>
            <ReceiptContainer>
                <Receipt/>
                <div>
                    0
                </div>
            </ReceiptContainer>
        </Container>
    )
}