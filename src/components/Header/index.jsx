import {
  Container,
  MenuButton,
  ReceiptContainer,
  TittleContainer,
} from "./styles";
import { Menu } from "../Menu";

import Icon from "../../assets/polygon.svg?react";
import Receipt from "../../assets/receipt.svg?react";
import MenuIcon from "../../assets/menu.svg?react";
import { useState } from "react";

export function Header() {
  const [state, serState] = useState(false);

  function handleClick() {
    serState(!state);
  }

  return (
    <>
      {state ? (
        <Menu handleFuntion={handleClick}/>
      ) : (
        <Container>
          <MenuButton onClick={() => handleClick()}>
            <MenuIcon />
          </MenuButton>
          <TittleContainer>
            <Icon />
            food explorer
          </TittleContainer>
          <ReceiptContainer>
            <Receipt />
            <div>0</div>
          </ReceiptContainer>
        </Container>
      )}
    </>
  );
}
