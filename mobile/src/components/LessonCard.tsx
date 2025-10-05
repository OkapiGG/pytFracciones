import { LinearGradient } from "expo-linear-gradient";
import React, { useRef } from "react";
import { Animated, Pressable } from "react-native";
import styled from "styled-components/native";

type LessonCardProps = {
    index?: number;
    id: string;
    title: string;
    sub: string;
    progress: number;
    icon: string;
    onPress: () => void;
}

export const LessonCard: React.FC<LessonCardProps> = ({
    index = 0,
    id,
    title,
    sub,
    progress,
    icon,
    onPress,
}) => {
    const clamped = Math.max(0, Math.min(100, progress));
    const scale = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
        Animated.spring(scale, {
            toValue: 1.08,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scale, {
            toValue: 1,
            friction: 3,
            tension: 100,
            useNativeDriver: true,
        }).start();
    };

    return (
        <Card style={{ marginTop: index === 0 ? 30 : 12}}>
            <Row>
                <LinearGradient
                    colors={["#c37bff", "#ff6bd6"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 14,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Icon>{icon}</Icon>    
                </LinearGradient>

                <Tag>
                    <TagText>Lección {id}</TagText>    
                </Tag>    
            </Row>

            <Content>
                <Title>{title}</Title>
                <Sub>{sub}</Sub>
            </Content>

            <Row style={{ marginTop: 14}}>
                <Muted>🏆 Progreso</Muted>
                <Muted>{progress}%</Muted>
            </Row>

            <BarBg>
                <LinearGradient
                    colors={["#c37bff", "#ff6bd6"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{
                        width: `${clamped}%`,
                        borderRadius: 14,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >    
                </LinearGradient>    
            </BarBg>

            <Pressable 
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                onPress={onPress}
                hitSlop={6}
                accessibilityRole="button"
            >
                <Animated.View style={{ transform: [{ scale }]}}>
                    <LinearGradient
                        colors={["#c37bff", "#ff6bd6"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{
                            borderRadius: 14,
                            paddingVertical: 14,
                            alignItems: "center",
                            width: "100%",
                        }}
                    >
                        <BtnText>
                            {clamped === 100 ? "Repasar Lección" : "Comenzar Lección"}
                        </BtnText>
                    </LinearGradient>
                </Animated.View>
            </Pressable>
        </Card>
    );
};

//---------Estilos-------

const Card = styled.View`
    background-color: white;
    border-radius: 18px;
    padding: 18px;
    margin-bottom: 12px;
    width: 90%;
    align-self: center;

    shadow-color: #000;
    shadow-opacity: 0.1;
    shadow-radius: 8px;
    elevation: 3;
`;

const Row = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Icon = styled.Text`
    font-size: 24px;
`;

const Tag = styled.Text`
    background: #f2f2f2;
    padding: 4px 10px;
    border-radius: 10px;
`;

const TagText = styled.Text`
    font-size: 12px;
    color: #555;
    font-weight: 700;
`;

const Content = styled.View`
    width: 100%;
    margin-top: 14px;
`;

const Title = styled.Text`
    font-size: 18px;
    font-weight: 800;
    color: #2f1b47;
`;

const Sub = styled.Text`
    font-size: 14px;
    color: #6a6a6a;
`;

const Muted = styled.Text`
    font-size: 14px;
    color: #7a7a7a;
`;

const BarBg = styled.View`
    width: 100%;
    height: 8px;
    border-radius: 8px;
    background: #eee;
    margin-top: 6px;
    margin-bottom: 6px;
`;

const BtnText = styled.Text`
    color: white; 
    font-weight: 900; 
    font-size: 15px;
`;