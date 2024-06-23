import { useState } from "react";

import {
  Container,
  MenuButton,
  ReceiptContainer,
  TittleContainer,
  InputContainer,
  SignOutButton
} from "./styles";

import Icon from "../../assets/polygon.svg?react";
import Receipt from "../../assets/receipt.svg?react";
import MenuIcon from "../../assets/menu.svg?react";
import Magnifier from "../../assets/magnifier.svg?react"
import SignOutIcon from "../../assets/signOut.svg?react"

import { Menu } from "../Menu";
import { Input } from "../Input";

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
          <InputContainer>
            <Input placeholder="Busque por pratos ou ingredientes" icon={Magnifier}/>
          </InputContainer>
          <ReceiptContainer>
            <Receipt />
            <div className="mobile">0</div>
            <div className="desktop">Pedidos (0)</div>
          </ReceiptContainer>
          <SignOutButton>
            <SignOutIcon/>
          </SignOutButton>
        </Container>
      )}
    </>
  );
}
