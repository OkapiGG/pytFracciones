import { LinearGradient } from "expo-linear-gradient";
import { Platform } from "react-native";
import styled from "styled-components/native";

type Props = {
    slicesTotal?: number;
    slicesEaten?: number;
    title?: string;
    subtitle?: string;
};

export const PizzaCard: React.FC<Props> = ({
    slicesTotal = 8,
    slicesEaten = 3,
    title = "¡Ejemplo con Pizza! 🍕",
    subtitle = "Si tenemos una pizza dividida en 8 pedazos y comemos 3:",
}) => {
    return(
        <CardShadow>
            <CardOuter>
                <LinearGradient
                    colors={["#fff8e6", "#fffcef"]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    style={{ borderRadius: 16, padding: 1}}
                >
                    <CardInner>
                        <HeaderRow>
                            <HeaderTitle>{title}</HeaderTitle>
                        </HeaderRow>

                        <Subtitle>{subtitle}</Subtitle>

                        <ContentRow>
                            <LeftCol>
                                <PizzaEmoji>🍕</PizzaEmoji>
                                <LeftCaption>{`Pizza completa\ndividida en ${slicesTotal} partes`}</LeftCaption>
                            </LeftCol>

                            <Arrow>➝</Arrow>

                            <FractionBox>
                                <FractionNumber style={{ marginBottom: 3}}>
                                    {slicesEaten}
                                </FractionNumber>
                                <Divider />
                                <FractionNumber style={{ marginTop: 6}}>
                                    {slicesTotal}
                                </FractionNumber>
                                <FractionCaption>{`${slicesEaten} de ${slicesTotal} pedazos`}</FractionCaption>
                            </FractionBox>
                        </ContentRow>
                    </CardInner>
                </LinearGradient>    
            </CardOuter>
        </CardShadow>
    )
}

const CardShadow = styled.View`
    width: 100%;
    ${Platform.select({
        ios: `
            shadow-color: #000;
            shadow-opacity: 0.08;
            shadow-radius: 14px;
            shadow-offset: 0px 6px;
        `,
        android: `
            elevation: 4;
        `,
        default: ``,
    }) as any}
`;

const CardOuter = styled.View`
    border-radius: 16px;
    overflow: hidden;
`;

const CardInner = styled.View`
    border-radius: 16px;
    background: #fffdf7;
    padding: 16px;
    border: 1px solid #ffe49a;
`;

const HeaderRow = styled.View`
    margin-bottom: 8px;
`;

const HeaderTitle = styled.Text`
    color: #ff7a00;
    font-weight: 800;
    font-size: 20px;
`;

const Subtitle = styled.Text`
    color: #2e2e2e;
    opacity: 0.85;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 18px;
`;

const ContentRow = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const LeftCol = styled.View`
    width: 34%;
    align-items: center;
    gap: 8px;
`;

const PizzaEmoji = styled.Text`
    font-size: 42px;
`;

const LeftCaption = styled.Text`
    color: #616161;
    text-align: center;
    font-size: 14px;
    line-height: 18px;
`;

const Arrow = styled.Text`
    font-size: 28px;
    margin: 0 6px;
`;

const FractionBox = styled.View`
    width: 34%;
    background: #ffffff;
    border-radius: 14px;
    padding: 16px 12px;
    align-items: center;
    border: 1px solid #f4f0e6;
    ${Platform.select({
        ios: `
            shadow-color: #000;
            shadow-opacity: 0.06;
            shadow-radius: 10px;
            shadow-offset: 0px 4px;
        `,
        android: `
            elevation: 2;
        `,
        default: ``,
    }) as any}
`;

const FractionNumber = styled.Text`
    color: #ff6a00;
    font-weight: 800;
    font-size: 32px;
    line-height: 32px;
`;

const Divider = styled.View`
    width: 36px;
    height: 2px;
    background: #ff6a00;
`;

const FractionCaption = styled.Text`
    margin-top: 10px;
    color: #ff6a00;
    font-size: 13px;
`;