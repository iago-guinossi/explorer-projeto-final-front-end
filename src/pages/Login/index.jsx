import { Container, InputContainer, SubTittle, Title } from "./styles";
import {Input} from '../../components/Input'
import { ButtonText } from "../../components/ButtonText";
import {Button} from "../../components/Button"

import Icon from '../../assets/polygon.svg?react'

export function Login(){
    return (
        <Container>
            <Title>
                <Icon/>
                food explorer
            </Title>
            <InputContainer>
                <SubTittle>Faça login</SubTittle>
                <Input tittle="Email" placeholder="Exemplo: exemplo@exemplo.com.br"></Input>
                <Input tittle="Senha" placeholder="No mínimo 6 caracteres"></Input>
                <Button>Entrar</Button>
                <ButtonText>Criar uma conta</ButtonText>
            </InputContainer>
        </Container>
    )
}