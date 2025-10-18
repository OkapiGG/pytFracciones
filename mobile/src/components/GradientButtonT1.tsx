import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";


type CTAProps = {
    title: string,
    onPress: () => void;
};

export const GradientButtonT1: React.FC<CTAProps> = ({title, onPress}) => {
    return (
        <CTAWrapper onPress={onPress} activeOpacity={0.9} hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
            <CTAShadow>
                <LinearGradient
                    colors={["#8a5bff", "#ff53c0"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{ borderRadius: 14, paddingVertical: 14, paddingHorizontal: 22 }}
                >
                    <CTAText>{title}</CTAText>
                </LinearGradient>    
            </CTAShadow>
        </CTAWrapper>
    );
};

const CTAWrapper = styled.TouchableOpacity`
    align-self: center;
`;

const CTAShadow = styled.View`
    border-radius: 999px;
    ${Platform.select({
        ios: `
            shadow-color: #9c27b0;
            shadow-opacity: 0.35;
            shadow-radius: 14px;
            shadow-offset: 0px 8px;
        `,
        android: `
            elevation: 6;
        `,
        default: ``,
    }) as any}
`;

const CTAText = styled.Text`
    color: #ffffff;
    font-weight: 800;
    font-size: 16px;
    text-align: center;
`;