import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";

type TargetCardProps = {
    title: string;
    subtitle: string;
    numerator: number;
    denominator: number;
    colorAccent?: string;
    colorNumerator?: string;
    colorDenominator?: string;
};

export const TargetCard: React.FC<TargetCardProps> = ({
    title,
    subtitle,
    numerator,
    denominator,
    colorAccent = "rgba(230, 0, 122, 0.35)",
    colorNumerator = "#e6007a",
    colorDenominator = "#8b00ff",
}) => {
    return (
        <TargetContainer>
            <AccentBar style={{ backgroundColor: colorAccent }} />
            <TargetTitle>{title}</TargetTitle>
            <TargetSubtitle>{subtitle}</TargetSubtitle>
                <TargetFraccion>
                    <ShadowCard>
                        <FractionCard>
                            <Numerator style={{ color: colorNumerator }}>{numerator}</Numerator>
                            <Divider style={{ backgroundColor: colorNumerator }} />
                            <Denominator style={{ color: colorDenominator }}>
                                {denominator}
                            </Denominator>
                        </FractionCard>
                    </ShadowCard>
                </TargetFraccion>
        </TargetContainer>
    );
};

// -------- estilos (copiados de tu Index) -------- //

const TargetContainer = styled.View`
    background: #ffeaf2;
    border-radius: 16px;
    padding: 16px 16px 24px;
    margin-top: 20px;
    position: relative;
`;

const AccentBar = styled.View`
    position: absolute;
    left: 0;
    top: 12px;
    bottom: 12px;
    width: 6px;
    border-radius: 6px;
`;

const TargetTitle = styled.Text`
    font-size: 18px;
    font-weight: 800;
    color: #111;
    margin-left: 10px;
`;

const TargetSubtitle = styled.Text`
    font-size: 15px;
    line-height: 22px;
    color: #222;
    margin-top: 6px;
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
`;

const Divider = styled.View`
    width: 56px;
    height: 3px;
    border-radius: 2px;
`;

const Denominator = styled.Text`
    font-size: 40px;
    font-weight: 900;
    margin-top: 6px;
`;
