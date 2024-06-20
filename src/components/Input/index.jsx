import { Container, InputContainer } from "./styles";

export function Input({ tittle, icon: Icon, ...rest }) {
  return (
    <Container>
        {tittle && <div>{tittle}</div>}
      <InputContainer>
        {Icon && <Icon size={24} />}
        <input {...rest} />
      </InputContainer>
    </Container>
  );
}
