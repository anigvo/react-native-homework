import { Container } from "../components/Container";
import { Background } from "../components/Background";
import { Status } from "../components/Status";
import { Wrap } from "../components/Wrap";
import { Form } from "../components/Form";
import { useNavigation } from "@react-navigation/native";

export const RegistrationScreen = () => {
  const navigation = useNavigation();
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
            nav={() => navigation.navigate("Login")}
          />
        </Wrap>
      </Background>
    </Container>
  );
};
