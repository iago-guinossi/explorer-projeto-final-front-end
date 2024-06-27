import {
  AmountButton,
  AmountContainer,
  ButtonsContainer,
  Container,
  FoodImg,
  FoodName,
  FoodPrice,
} from "./style";
import { Button } from "../Button";

import HeartIcon from "../../assets/heart.svg?react";
import PlusIcon from "../../assets/plus.svg?react";
import MinusIcon from "../../assets/minus.svg?react";
import imgSalada from "../../assets/salada.png";

export function Card() {
  return (
    <Container>
      <HeartIcon />
      <FoodImg src={imgSalada} />
      <FoodName>Salada Ravanello &gt;</FoodName>
      <FoodPrice>R$ 49,97</FoodPrice>
      <ButtonsContainer>
        <AmountContainer>
          <AmountButton>
            <MinusIcon />
          </AmountButton>
          01
          <AmountButton>
            <PlusIcon />
          </AmountButton>
        </AmountContainer>
        <Button>incluir</Button>
      </ButtonsContainer>
    </Container>
  );
}
