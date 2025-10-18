import { GradientButtonT1 } from "@/src/components/GradientButtonT1";
import { PizzaCard } from "@/src/components/PizzaCardT1";
import { TargetCard } from "@/src/components/TargerTheory";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import React, { useMemo } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";


export default function Index() {
    const { title } = useLocalSearchParams<{ title: string }>();
    const titulo = useMemo(() => (typeof title === "string" ? title : "").trim(), [title]);

    const insets = useSafeAreaInsets();
    const topPad = insets.top || 0;
    const bottomPad = (insets.bottom || 0) + 1;

    return (
        <BG>
            <LinearGradient
                colors={["#ffe9ff", "#fde7ff", "#f8f2ff"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ flex: 1 }}
            >
                <View style={[styles.badgeWrapper, { top: topPad + 12 }]}>
                    <ButtonBack onPress={() => router.back()}>
                        <ButtonBackText>Volver</ButtonBackText>
                    </ButtonBack>


                    <View style={styles.badge}>
                        <Text style={styles.badgeText} numberOfLines={1}>
                            {`Lección 1: ${titulo}`}
                        </Text>
                    </View>
                </View>
                <ScreenContent
                    contentContainerStyle={{
                        paddingTop: topPad + 56,
                        paddingBottom: bottomPad,
                        alignItems: "center",
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    <Container>
                        <Title>¡Aprendamos sobre Fracciones! 🎂</Title>
                        <Subtitle>Las fracciones nos ayudan a representar partes de un entero</Subtitle>

                        <TargetCard
                            title="¿Qué es una fracción? 🤔"
                            subtitle="Una fracción es una manera de escribir números que representan partes de algo completo. ¡Como cuando compartimos una pizza con amigos!"
                            numerator={3}
                            denominator={4}
                        />
                        <TargetCard
                            title="El numerador ⬆️"
                            subtitle="El numerador es el número de arriba. Nos dice cuántas partes hemos tomado."
                            numerator={3}
                            denominator={4}
                            colorAccent = "rgba(119, 0, 230, 0.35)"
                            colorNumerator = "#e6007a"
                            colorDenominator = "#7b7b7c"
                        />
                        <TargetCard
                            title="El Denominador ⬇️"
                            subtitle="El denominador es el número de abajo. Nos dice en cuántas partes dividimos el entero."
                            numerator={3}
                            denominator={4}
                            colorAccent = "rgba(119, 0, 230, 0.35)"
                            colorNumerator = "#7b7b7c"
                            colorDenominator = "#8b00ff"
                        />

                        <View style={{ height: 20 }}/>


                        <PizzaCard slicesTotal={8} slicesEaten={3}></PizzaCard>

                        <View style={{ height: 20 }} />

                        <GradientButtonT1 title="¡Practicar con Ejercicios! 🎯" onPress={() => router.push("/views/Lesson1")}
                        />
                    </Container>
                </ScreenContent>
            </LinearGradient>
        </BG>
    );
}

const styles = StyleSheet.create({
    badgeWrapper: {
        position: "absolute",
        left: 12,
        right: 12,
        zIndex: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    badge: {
        maxWidth: "80%",
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 999,
        backgroundColor: "rgba(255,255,255,0.9)",
    ...Platform.select({
        ios: {
            shadowColor: "#000",
            shadowOpacity: 0.12,
            shadowRadius: 8,
            shadowOffset: { width: 0, height: 4 },
        },
        android: { elevation: 4 },
        }),
    },
    badgeText: {
        fontWeight: "700",
        color: "#7c3aed",
        fontSize: 13,
    },
});

const BG = styled.View`
    flex: 1;
`;

const ScreenContent = styled.ScrollView`
    flex: 1;
`;

const ButtonBack = styled.TouchableOpacity`
    padding: 8px 14px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.9);
    flex-direction: row;
    align-items: center;
`;

const ButtonBackText = styled.Text`
    font-weight: 600;
    font-size: 13px;
    color: #7c3aed;
`;  

const Container = styled.View`
    width: 85%;
    background: white;
    border-radius: 16px;
    padding: 20px;
`;

const Title = styled.Text`
    font-size: 20px;
    font-weight: 800;
`;

const Subtitle = styled.Text`
    font-size: 14px;
    color: #7a7a7a;
`;