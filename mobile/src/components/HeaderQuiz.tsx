import React from "react";
import styled from "styled-components/native";

type Props = {
    current: number;
    total: number;
    points: number;
    onPressTheory?: () => void;
};


export const HeaderQuiz: React.FC<Props> = ({current, total, points, onPressTheory}) => {
    return(
        <Wrap>
            <Row>
                <PillButton onPress={onPressTheory} activeOpacity={0.8}>
                    <PillText>Ver Teoria</PillText>
                </PillButton>

                <Pill>
                    <PillTextBold>Pregunta {current} de {total}</PillTextBold>
                </Pill>

                <Pill>
                    <Inline>
                        <Star>⭐</Star>
                        <PillTextPoints>{points} puntos</PillTextPoints>
                    </Inline>
                </Pill>
            </Row>
        </Wrap>
    );
};

const Wrap = styled.View`
    width: 100%;
    padding-top: 80px;
    padding-inline: 20px;
`;

const Row = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Pill = styled.View`
    padding: 10px 10px;
    background-color: white;
    border-radius: 100px;
`;

const PillButton = styled.TouchableOpacity`
    padding: 10px 14px;
    background-color: white;
    border-radius: 10px;
`;

const PillText = styled.Text`
    font-size: 16px;
    font-weight: 600;
`;

const PillTextBold = styled.Text`
    font-size: 14px;
    font-weight: 800;
    color: #6A00FF;
`;

const PillTextPoints = styled.Text`
    font-size: 14px;
    font-weight: 800;
    color: #e6007a;
`;

const Inline = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 6px;
`;

const Star = styled.Text`
    font-size: 18px;
`;