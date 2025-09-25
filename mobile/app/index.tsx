import React, { useState } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';

export default function LoginScreen() {
    const [name, setName] = useState('');

    const valNombre = () => {
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
            {/* <IconImage source={require('./assets/book-icon.png')} /> */}
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

            <NextButton onPress={valNombre}>
                <ButtonText>¡Siguiente! 🚀</ButtonText>
            </NextButton>
        </Card>
    </ScreenContainer>
    );
}

// ---Estilos---
const ScreenContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #FDEFEF;
`;

const Card = styled.View`
    background-color: white;
    border-radius: 20px;
    padding: 30px;
    align-items: center;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
`;

const IconContainer = styled.View`
    background-color: #A064FF;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);

`;

// const IconImage = styled.Image`
//     width: 50px;
//     height: 50px;
// `;

const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #5d08e6;
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
    font-size: 16px;
    color: #333;
    margin-bottom: 25px;
    border: 1px solid #ddd;
`;

const NextButton = styled.TouchableOpacity`
    width: 100%;
    padding: 15px;
    background-color: #FF69B4;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 5px 15px rgba(255, 105, 180, 0.4);
`;

const ButtonText = styled.Text`
    color: white;
    font-size: 18px;
    font-weight: bold;
`;