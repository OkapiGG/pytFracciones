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
                
            </LinearGradient>
        </BG>
    )
}

const BG = styled.View`
    flex: 1;
`;