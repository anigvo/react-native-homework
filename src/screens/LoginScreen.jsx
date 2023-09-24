import { Container } from "../components/Container";
import { Background } from "../components/Background";
import { Status } from "../components/Status";
import { Wrap } from "../components/Wrap";
import { Form } from "../components/Form";
import { useNavigation } from "@react-navigation/native";

export const LoginScreen = () => {
   const navigation = useNavigation();
  return (
    <Container>
      <Background>
        <Status />
        <Wrap margin={323} padding={32}>
          <Form
            registration={false}
            title={"Увійти"}
            buttonText={"Увійти"}
            linkText={"Немає акаунту? Зареєструватися"}
            nav={() => navigation.navigate("Registration")}
          />
        </Wrap>
      </Background>
    </Container>
  );
};
