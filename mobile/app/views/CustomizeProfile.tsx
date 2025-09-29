import React, { useState } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';

export default function LoginScreen() {
  const [selectedCompanion, setSelectedCompanion] = useState<string | null>(null);

  const handleNext = () => {
    if (!selectedCompanion) {
      Alert.alert('Escoge un compañero', 'Por favor, selecciona un compañero para continuar.');
      return;
    }
    Alert.alert('¡Listo!', `Has elegido: ${selectedCompanion} ✨`);
  };

  return (
    <ScreenContainer>
      <Card>
        <Title>¡⭐Hola⭐!</Title>
        <Subtitle>Elige a tu compañero de aventuras en el mundo de las fracciones</Subtitle>
        <QuestionText>Juntos aprenderán a dividir dulces y mucho más</QuestionText>

        {/* Tarjeta tipo “sticker” */}
        <CompanionCard
          active={selectedCompanion === 'Galleto'}
          onPress={() => setSelectedCompanion('Galleto')}
          activeOpacity={0.9}
        >
          <Emoji>🍪</Emoji>
          <CompanionTitle>Galleto</CompanionTitle>
          <CompanionSubtitle>Tu dulce compañero de fracciones</CompanionSubtitle>
        </CompanionCard>                
        <Title>Escoge tu compañero favorito</Title>
      </Card>            
    </ScreenContainer>
  );
}

/* ---------- Estilos ---------- */
const ScreenContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #c47afe;
`;

const Card = styled.View`
  background-color: #ffffff;
  border-radius: 20px;
  padding: 28px;
  align-items: center;
  width: 92%;
  max-width: 420px;
  /* Sombra iOS */
  shadow-color: #000;
  shadow-offset: 0px 10px;
  shadow-opacity: 0.12;
  shadow-radius: 18px;
  /* Sombra Android */
  elevation: 6;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 800;
  color: #364153;
  text-align: center;
  margin-bottom: 8px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  color: #6a6a6a;
  text-align: center;
  margin-bottom: 10px;
`;

const QuestionText = styled.Text`
  font-size: 14px;
  color: #4a4a4a;
  text-align: center;
  margin-bottom: 18px;
`;

/* ---- Tarjeta del compañero (como tu imagen) ---- */
const CompanionCard = styled.TouchableOpacity<{ active?: boolean }>`
  width: 220px;
  padding: 18px;
  border-radius: 14px;
  align-items: center;
  justify-content: center;

  /* Fondo suave tipo tarjeta */
  background: ${(p) => (p.active ? '#f3e5ff' : '#f9f1ff')};

  /* Borde sutil y resaltado cuando está activa */
  border: 2px solid ${(p) => (p.active ? '#7b2cbf' : '#f0d9ff')};

  /* Sombras */
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.12;
  shadow-radius: 10px;
  elevation: 3;

  margin-bottom: 22px;
`;

const Emoji = styled.Text`
  font-size: 44px;
  margin-bottom: 10px;
`;

const CompanionTitle = styled.Text`
  font-size: 18px;
  font-weight: 800;
  color: #7b2cbf;
  margin-bottom: 4px;
`;

const CompanionSubtitle = styled.Text`
  font-size: 13px;
  color: #6a6a6a;
  text-align: center;
`;

/* Botón siguiente */
const NextButton = styled.TouchableOpacity`
  width: 100%;
  padding: 14px;
  background-color: #c86fdf;
  border-radius: 10px;
  justify-content: center;
  align-items: center;

  shadow-color: #000;
  shadow-offset: 0px 5px;
  shadow-opacity: 0.18;
  shadow-radius: 12px;
  elevation: 4;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;
