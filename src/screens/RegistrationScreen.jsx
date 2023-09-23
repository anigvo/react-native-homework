import { Container } from "../components/Container";
import { Background } from "../components/Background";
import { Status } from "../components/Status";
import { Wrap } from "../components/Wrap";
import { Form } from "../components/Form";

export const RegistrationScreen = () => {
  return (
    <Container>
      <Background>
        <Status />
        <Wrap margin={263} padding={92}>
          <Form
            registration={true}
            title={"Регістрація"}
            buttonText={"Зареєстуватися"}
            linkText={"Вже є акаунт? Увійти"}
          />
        </Wrap>
      </Background>
    </Container>
  );
};
