import { CardQuiz } from "@/src/components/CardQuiz";
import { HeaderQuiz } from "@/src/components/HeaderQuiz";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import styled from "styled-components/native";

export default function Lesson1(){

    return(
        <BG>
            <LinearGradient
            colors={["#ffe9ff", "#fde7ff", "#f8f2ff"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ flex: 1 }}
            >
                <HeaderQuiz
                    current={1}
                    total={5}
                    points={0}
                    onPressTheory={() => router.back()}
                /> 
                
                <Container>
                    <CardQuiz
                    title={"¿Cuál es el denominador en la fracción 5/8?"}
                    numerator={5}
                    denominator={8}
                    answer1="5"
                    answer2="8"
                    answer3="13"
                    answer4="40"
                />
                </Container>
                
            </LinearGradient>
        </BG>
    )
}

const BG = styled.View`
    flex: 1;
`;

const Container = styled.View`
    justify-content: center;
    align-items: center;
`