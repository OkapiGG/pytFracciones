import { UserRepository } from "@/src/models/userRepository";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import React, { useMemo, useState } from "react";
import { Alert, FlatList } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";

type Comp = { key: string; emoji: string; label: string; sub: string };

const COMPANIONS: Comp[] = [
  { key: "Galleto", emoji: "🍪", label: "Galleto", sub: "Tu dulce compañero de fracciones" },
  { key: "Cuppy",   emoji: "🧁", label: "Cuppy",   sub: "Siempre listo para sumar" },
  { key: "Dulcito", emoji: "🍭", label: "Dulcito", sub: "Le encantan las partes iguales" },
  { key: "Tortita", emoji: "🎂", label: "Tortita", sub: "Divide y comparte" },
  { key: "Rosquilla", emoji: "🍩", label: "Rosquilla", sub: "Círculos y porciones" },
  { key: "Pastel",  emoji: "🥧", label: "Pastel",  sub: "Rebanadas perfectas" },
  { key: "Helado",  emoji: "🍦", label: "Helado",  sub: "Dulce y refrescante" },
  { key: "Choco",   emoji: "🍫", label: "Choco",   sub: "Tabletas y barritas" },
];

export default function CustomizeProfileScreen() {
  const { name } = useLocalSearchParams<{ name: string }>();
  const nombre = useMemo(() => (typeof name === "string" ? name : "").trim(), [name]);
  const [selected, setSelected] = useState<string>("Galleto");

  const insets = useSafeAreaInsets();
  const topPad = (insets.top || 0) + 8;
  const bottomPad = (insets.bottom || 0) + 1;

  const onStart = async () => {
    if (!nombre) {
      Alert.alert("Falta nombre", "Regresa y escribe tu nombre.");
      return;
    }
    if (!selected) {
      Alert.alert("Escoge un compañero", "Selecciona un compañero para continuar.");
      return;
    }
    try {
      await UserRepository.createUser(nombre, selected);
      const usuario = await UserRepository.getByName(nombre);
      console.log("Insertado:", usuario);
      Alert.alert("¡Listo!", `Has elegido: ${selected} ✨`);
      router.push({ pathname: "/views/lessons" });
    } catch (e: any) {
      if (typeof e?.message === "string" && e.message.includes("SQLITE_CONSTRAINT")) {
        Alert.alert("Nombre en uso", "Este nombre ya existe. Intenta con otro.");
      } else {
        Alert.alert("Ups", "No se pudo guardar. Intenta de nuevo.");
        console.error("createUser error:", e);
      }
    }
  };

  const renderItem = ({ item }: { item: Comp }) => {
    const active = selected === item.key;
    return (
      <CardWrap onPress={() => setSelected(item.key)} activeOpacity={0.9}>
        {active ? (
          <GradientBorder>
            <InnerCard active>
              <Emoji>{item.emoji}</Emoji>
              <CardTitle active>{item.label}</CardTitle>
            </InnerCard>
          </GradientBorder>
        ) : (
          <InnerCard>
            <Emoji>{item.emoji}</Emoji>
            <CardTitle>{item.label}</CardTitle>
          </InnerCard>
        )}
      </CardWrap>
    );
  };

  const featured = COMPANIONS.find((c) => c.key === selected) ?? COMPANIONS[0];

  return (
    <BG>
      <LinearGradient
        colors={["#ffe9ff", "#fde7ff", "#f8f2ff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={{ flex: 1 }} edges={["top", "bottom"]}>
          <ScreenContent
            contentContainerStyle={{
              paddingTop: topPad,
              paddingBottom: bottomPad,
              paddingHorizontal: 22,
            }}
            showsVerticalScrollIndicator={false}
          >
            <Header>
              <TinyEmoji>✨</TinyEmoji>
              <Title>
                ¡Hola <Highlight>{nombre || "amig@"}</Highlight>!
              </Title>
              <TinyEmoji>🌟</TinyEmoji>
            </Header>

            <SubTitle>Elige tu compañero de aventuras en el mundo de las fracciones</SubTitle>
            <SmallText>Juntos aprenderán a dividir dulces y mucho más</SmallText>

            <Featured>
              <LinearGradient
                colors={["#c37bff", "#ff6bd6"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ borderRadius: 18, padding: 2 }}
              >
                <FeaturedInner>
                  <Emoji style={{ fontSize: 56 }}>{featured.emoji}</Emoji>
                  <FeaturedTitle>{featured.label}</FeaturedTitle>
                  <FeaturedSub>{featured.sub}</FeaturedSub>
                </FeaturedInner>
              </LinearGradient>
            </Featured>

            <SectionTitle>Escoge tu compañero favorito:</SectionTitle>
            <FlatList
              data={COMPANIONS}
              keyExtractor={(i) => i.key}
              renderItem={renderItem}
              numColumns={3}
              columnWrapperStyle={{ gap: 12 }}
              contentContainerStyle={{ gap: 12, paddingBottom: 16 }}
              scrollEnabled={false}
            />

            <Footer>
              <GhostButton onPress={() => router.back()}>
                <GhostText>← Volver</GhostText>
              </GhostButton>
              <CTA onPress={onStart} activeOpacity={0.9}>
                <LinearGradient
                  colors={["#8a5bff", "#ff53c0"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{ borderRadius: 14, paddingVertical: 14, paddingHorizontal: 22 }}
                >
                  <CTAtext>¡Empezar Aventura! 🚀</CTAtext>
                </LinearGradient>
              </CTA>
            </Footer>
          </ScreenContent>
        </SafeAreaView>
      </LinearGradient>
    </BG>
  );
}

// ------Estilos----------
const BG = styled.View`flex: 1;`;

const ScreenContent = styled.ScrollView`
  flex: 1;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-top: 4px;
`;
const TinyEmoji = styled.Text`font-size: 16px;`;
const Title = styled.Text`
  font-size: 28px;
  font-weight: 900;
  color: #3b2a5a;
`;
const Highlight = styled.Text`color: #8247ff;`;

const SubTitle = styled.Text`
  text-align: center;
  color: #4b4b4b;
  font-size: 16px;
  margin-top: 8px;
`;
const SmallText = styled.Text`
  text-align: center;
  color: #7a7a7a;
  font-size: 13px;
`;

const Featured = styled.View`margin-top: 14px;`;
const FeaturedInner = styled.View`
  background: #ffffff;
  border-radius: 16px;
  padding: 18px;
  align-items: center;
`;
const FeaturedTitle = styled.Text`
  font-size: 20px;
  font-weight: 800;
  color: #7b2cbf;
  margin-top: 6px;
`;
const FeaturedSub = styled.Text`
  font-size: 13px;
  color: #6a6a6a;
  text-align: center;
  margin-top: 2px;
`;

const SectionTitle = styled.Text`
  margin-top: 18px;
  font-weight: 800;
  color: #364153;
  text-align: left;
`;

const CardWrap = styled.TouchableOpacity`flex: 1;`;

const GradientBorder = ({ children }: { children: React.ReactNode }) => (
  <LinearGradient
    colors={["#9a6bff", "#ff59c1"]}
    start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
    style={{ borderRadius: 14, padding: 2 }}
  >
    {children}
  </LinearGradient>
);

const InnerCard = styled.View<{ active?: boolean }>`
  background: ${(p) => (p.active ? "#f8f0ff" : "#ffffff")};
  border-radius: 12px;
  padding: 14px 10px;
  align-items: center;
  justify-content: center;
  gap: 6px;

  shadow-color: #000;
  shadow-offset: 0px 3px;
  shadow-opacity: 0.12;
  shadow-radius: 8px;
  elevation: 3;
`;
const Emoji = styled.Text`font-size: 36px;`;
const CardTitle = styled.Text<{ active?: boolean }>`
  font-size: 14px;
  font-weight: 700;
  color: ${(p) => (p.active ? "#6d30b5" : "#4a4a4a")};
`;

const Footer = styled.View`
  margin-top: 18px;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
`;
const GhostButton = styled.TouchableOpacity`
  padding: 12px 16px;
  border-radius: 12px;
  background: #ffffff;
  border: 1.5px solid #e7d8ff;
`;
const GhostText = styled.Text`color: #5c40b5; font-weight: 700;`;
const CTA = styled.TouchableOpacity`flex-shrink: 0;`;
const CTAtext = styled.Text`
  color: white;
  font-weight: 900;
  font-size: 16px;
  text-align: center;
`;
