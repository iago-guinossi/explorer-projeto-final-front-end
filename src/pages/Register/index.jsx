import { Container, InputContainer, SubTittle, Title } from "./styles";
import {Input} from '../../components/Input'
import { ButtonText } from "../../components/ButtonText";
import {Button} from "../../components/Button"

import Icon from '../../assets/polygon.svg?react'

export function Register(){
    return (
        <Container>
            <Title>
                <Icon/>
                food explorer
            </Title>
            <InputContainer>
                <SubTittle>Crie sua conta</SubTittle>
                <Input tittle="Seu nome" placeholder="Exemplo: Maria da Silva"></Input>
                <Input tittle="Email" placeholder="Exemplo: exemplo@exemplo.com.br"></Input>
                <Input tittle="Senha" placeholder="No mínimo 6 caracteres"></Input>
                <Button>Criar conta</Button>
                <ButtonText>Já tenho uma conta</ButtonText>
            </InputContainer>
        </Container>
    )
}