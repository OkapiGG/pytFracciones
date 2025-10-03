import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import React, { useMemo } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";

export default function Index() {
    const { name } = useLocalSearchParams<{ name: string }>();
    const { selected } = useLocalSearchParams<{ selected: string }>();
    const nombre = useMemo(() => (typeof name === "string" ? name : "").trim(), [name]);
    
    
    const insets = useSafeAreaInsets();
    const topPad = (insets.top || 0);
    const bottomPad = (insets.bottom || 0) + 1;

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
                    <HeaderContainer>
                        {/* <Emoji>
                            {selected}
                        </Emoji> */}
                        <TextHeader>
                            ¡Hola <Highlight>{nombre}</Highlight>!
                        </TextHeader>
                    </HeaderContainer>
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
    height: 80px;
    background-color: white;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0 16px;
    padding-bottom: 10px;
`;

const TextHeader = styled.Text`
    color: black;
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 5%;
`;

const Highlight = styled.Text`
    color: #8247ff;
`;

const Emoji = styled.Text`
    font-size: 36px;
`;
