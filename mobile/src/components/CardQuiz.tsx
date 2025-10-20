import { useEffect, useMemo, useState } from 'react';
import { Platform } from 'react-native';
import styled from "styled-components/native";

type Props = {
    title: string,
    numerator?: number;
    denominator?: number;
    answer1: string,
    answer2: string,
    answer3: string,
    answer4: string,
    correctanswer: string,
    selectedValue?: string | null,
    onSelect?: (value: string) => void,
}

export const CardQuiz: React.FC<Props> = ({
    title = "¿Cuál es el denominador en la fracción 5/8?",
    numerator = 5,
    denominator = 8,
    answer1 = "5",
    answer2 = "8",
    answer3 = "13",
    answer4 = "40",
    correctanswer = "8",
    selectedValue,
    onSelect,
}) => {
    const [internalSelected, setInternalSelected] = useState<string | null>(null);
    const selected = selectedValue ?? internalSelected;
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);


    const answers = useMemo(() => [answer1, answer2, answer3, answer4], [
        answer1,
        answer2,
        answer3,
        answer4,
    ]);

    useEffect(() => {
        if (selected != null) {
            const ok = selected === correctanswer;
            console.log(ok ? "Correcto" : "Incorrecto")
            setIsCorrect(ok);
        }
    }, [selected, correctanswer]);

    const handlePress = (value: string) => {
        setInternalSelected(value);
        onSelect?.(value);
    };

    return(
        <Container>
            <Text>{title}</Text>
            <TargetFraccion>
                <ShadowCard>
                    <FractionCard>
                        <Numerator>{numerator}</Numerator>
                        <Divider/>
                        <Denominator>{denominator}</Denominator>
                    </FractionCard>
                </ShadowCard>
            </TargetFraccion>
            <AnswersWrapper>
                {answers.map((a) => (
                    <AnswerCard
                        key={a}
                        isSelected={selected === a}
                        android_ripple={{ color: '#EDE7F6' }}
                        onPress={() => handlePress(a)}
                    >
                        <AnswerText isSelected={selected === a}>{a}</AnswerText>
                    </AnswerCard>
                ))}
            </AnswersWrapper>
        </Container> 
    )
}

const Container = styled.View`
    align-items:center;
    align-self: center;
    border-radius: 18px;
    padding: 18px;
    margin-bottom: 12px;
    width: 90%;
    height: 70%;
    background-color: white;
`;

const Text = styled.Text`
    text-align: center;
    font-size: 20px;
    font-weight: 800;
    color: #111;
    margin-left: 10px;
`;

const TargetFraccion = styled.View`
    align-items: center;
    margin-top: 18px;
`;

const ShadowCard = styled.View.attrs(() => ({
    style: Platform.select({
        ios: {
            shadowColor: "#000",
            shadowOpacity: 0.15,
            shadowRadius: 16,
            shadowOffset: { width: 0, height: 10 },
        },
        android: { elevation: 8 },
    }),
}))`
    border-radius: 18px;
`;

const FractionCard = styled.View`
    background: #fff;
    border-radius: 18px;
    width: 120px;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Numerator = styled.Text`
    font-size: 40px;
    font-weight: 900;
    margin-bottom: 6px;
    color: #e6007a;
`;

const Divider = styled.View`
    width: 56px;
    height: 3px;
    border-radius: 2px;
    background-color: #e6007a;
`;

const Denominator = styled.Text`
    font-size: 40px;
    font-weight: 900;
    margin-top: 6px;
    color: #6A00FF;
`;

const AnswersWrapper = styled.View`
    width: 90%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
`;

const AnswerCard = styled.Pressable<{
    isSelected: boolean;
    isCorrect?: boolean | null;
    }>`
    width: 48%;
    padding-vertical: 22px;
    margin-bottom: 14px;
    border-radius: 18px;
    border-width: 2px;
    align-items: center;
    justify-content: center;
    background: ${(p) => {
        if (!p.isSelected) return '#fff';         
        if (p.isCorrect === null) return '#EDE7F6';
        return p.isCorrect ? 'green' : 'red';     
    }};

    border-color: #decdf7;
`;

const AnswerText = styled.Text<{ isSelected: boolean }>`
    font-size: 22px;
    font-weight: 700;
    color: ${(p) => (p.isSelected ? '#2F1E8A' : '#2f3542')};
`;