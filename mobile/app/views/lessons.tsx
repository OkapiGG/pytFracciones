import { LessonCard } from "@/src/components/LessonCard";
import { getEmoji } from "@/src/models/companions";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import React, { useMemo } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";

export default function Index() {
    const { name, selected, emoji } = useLocalSearchParams<{
        name?: string;
        selected?: string;
        emoji?: string;
    }>();
    
    const nombre = useMemo(
        () => (typeof name === "string" ? name : "").trim(),
        [name]
    );

    const showEmoji = useMemo(
        () => typeof emoji === "string" && emoji.length > 0
        ? emoji : getEmoji(selected, "✨"),
        [emoji, selected]
    );
    
    const insets = useSafeAreaInsets();
    const topPad = (insets.top || 0);
    const bottomPad = (insets.bottom || 0) + 1;

    const LESSONS = [
        { id: "1", title: "Numerador y Denominador", sub: "Conceptos básicos de fracciones", progress: 100, icon: "📊" },
    ];

    return (
        <BG>
            <LinearGradient
                colors={["#c37bff", "#ff6bd6"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{flex: 1}}
            >
                <ScreenContent
                    contentContainerStyle={{
                        paddingTop: topPad,
                        paddingBottom: bottomPad,
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    {/* -----Header -----*/}

                    <HeaderContainer>
                        <LeftWrap>
                            <Emoji>{showEmoji}</Emoji>
                            <TextHeader>
                                ¡Hola <Highlight>{nombre || "amig@"}</Highlight>!
                            </TextHeader>
                        </LeftWrap>
                    </HeaderContainer>

                    {/* ------Lecciones -----------*/}
                    
                    {LESSONS.map((l, idx) => (
                        <LessonCard
                            key={l.id}
                            index={idx}
                            id={l.id}
                            title={l.title}
                            sub={l.sub}
                            progress={l.progress}
                            icon={l.icon}
                            onPress={() => 
                                router.push({
                                pathname: '/views/Lesson1Theory',
                                params: { title: l.title },
                                })
                            }   
                        />
                    ))}
                </ScreenContent>
            </LinearGradient>
        </BG>
    );
}

//---------------Estilos------------------

const BG = styled.View`
    flex: 1;
`;
const ScreenContent = styled.ScrollView`
    flex: 1;
`;

const HeaderContainer = styled.View`
    width: 100%;
    background-color: white;
    padding: 12px 16px 12px 16px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

const LeftWrap = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 8px;
`;

const Emoji = styled.Text`
    font-size: 32px;
    margin-top: 2px;
`;

const TextHeader = styled.Text`
    color: black;
    font-size: 20px;
    font-weight: bold;
`;

const Highlight = styled.Text`
    color: #8247ff;
`;