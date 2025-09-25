import React, { useState } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';

export default function LoginScreen() {
    const [name, setName] = useState('');

    const handleNext = () => {
        if (!name.trim()) {
            Alert.alert('Error', 'Por favor, introduce tu nombre.');
            return;
        }
        Alert.alert('¡Hola!', `Bienvenido, ${name.trim()}!`);
    };
    return (
    <ScreenContainer>
        <Card>
            <IconContainer>
            <IconImage source={require('./assets/book-icon.png')} />
            </IconContainer>
            <Title>¡MathFun!</Title>
            <Subtitle>Aprende matemáticas jugando</Subtitle>

            <QuestionText>¿Cómo te llamas, pequeño matemático?</QuestionText>
            <StyledInput
                placeholder="Escribe tu nombre aquí..."
                placeholderTextColor="#aaa"
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
            />

            <NextButton onPress={handleNext}>
                <ButtonText>¡Siguiente! 🚀</ButtonText>
            </NextButton>

            {/* <FooterIconsContainer>
                <FooterIcon source={require('./assets/balloon.png')} />
                <FooterIcon source={require('./assets/star-gold.png')} />
                <FooterIcon source={require('./assets/target.png')} />
                <FooterIcon source={require('./assets/trophy.png')} />
            </FooterIconsContainer> */}
        </Card>
    </ScreenContainer>
    );
}



// ---Estilos---
const ScreenContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #FDEFEF; /* Un fondo de color suave y simple */
`;

const Card = styled.View`
    //width: ${width * 0.85}px; /* 85% del ancho de la pantalla */
    background-color: white;
    border-radius: 20px;
    padding: 30px;
    align-items: center;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
    elevation: 10; /* Sombra para Android */
`;

const IconContainer = styled.View`
    background-color: #A064FF; /* Morado del ícono */
    width: 80px;
    height: 80px;
    border-radius: 40px; /* Círculo perfecto */
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    elevation: 5;
`;

const IconImage = styled.Image`
    width: 50px;
    height: 50px;
`;

const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
`;

const Subtitle = styled.Text`
    font-size: 16px;
    color: #666;
    margin-bottom: 30px;
`;

const QuestionText = styled.Text`
    font-size: 16px;
    color: #444;
    margin-bottom: 15px;
    text-align: center;
`;

const StyledInput = styled.TextInput`
    width: 100%;
    height: 50px;
    background-color: #f0f0f0;
    border-radius: 10px;
    padding-horizontal: 15px;
    font-size: 16px;
    color: #333;
    margin-bottom: 25px;
    border: 1px solid #ddd;
`;

const NextButton = styled.TouchableOpacity`
    width: 100%;
    padding: 15px;
    background-color: #FF69B4; /* Rosa vibrante */
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 5px 15px rgba(255, 105, 180, 0.4);
    elevation: 8;
`;

const ButtonText = styled.Text`
    color: white;
    font-size: 18px;
    font-weight: bold;
`;

const FooterIconsContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    width: 80%;
    margin-top: 30px;
`;

const FooterIcon = styled.Image`
    width: 40px;
    height: 40px;
`;