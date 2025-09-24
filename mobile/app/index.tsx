import styled from "styled-components/native";

export default function LoginScreen() {
    return (
        <Container>
            <Title>Bienvenido</Title>

            <StyledInput 
                placeholder="Correo electrónico"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <StyledInput 
                placeholder="Contraseña"
                placeholderTextColor="#999"
                secureTextEntry
            />

            <LoginButton activeOpacity={0.8}>
                <ButtonText>Ingresar</ButtonText>
            </LoginButton>
        </Container>
    );
}



// ---Estilos---
const Container = styled.View`
    flex: 1;
    justify-content: center;
    background-color: #F7F7F7; 
    padding: 25px;
`;

const Title = styled.Text`
    font-size: 36px;
    font-weight: bold; 
    color: #212121;
    margin-bottom: 30px;
    text-align: center;
`;

const StyledInput = styled.TextInput`
    width: 100%;
    height: 55px;
    background-color: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 12px;
    padding: 15px;
    margin-top: 15px;
    font-size: 16px;
    color: #333;
`;

const LoginButton = styled.TouchableOpacity` 
    width: 100%;
    padding: 18px;
    margin-top: 25px;
    background-color: #007AFF;
    border-radius: 12px;
    align-items: center;
    box-shadow: 0px 5px 15px rgba(0, 122, 255, 0.3);
    elevation: 5;
`;

const ButtonText = styled.Text`
    color: white;
    font-size: 18px;
    font-weight: bold;
`;