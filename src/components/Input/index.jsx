import { Container, InputContainer } from "./styles";

export function Input({ tittle, icon: Icon, ...rest }) {
  return (
    <Container>
        {tittle && <span>{tittle}</span>}
      <InputContainer>
        {Icon && <Icon size={24} />}
        <input {...rest} />
      </InputContainer>
    </Container>
  );
}
