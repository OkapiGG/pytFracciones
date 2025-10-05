export type CompanionKey =
    | "Galleto"
    | "Cuppy"
    | "Dulcito"
    | "Tortita"
    | "Rosquilla"
    | "Pastel"
    | "Helado"
    | "Choco";

export type Companion = {
    key: CompanionKey;
    emoji: string;
    label: string;
    sub: string;
};

export const COMPANIONS: Companion[] = [
    { key: "Galleto",   emoji: "🍪", label: "Galleto",   sub: "Tu dulce compañero de fracciones" },
    { key: "Cuppy",     emoji: "🧁", label: "Cuppy",     sub: "Siempre listo para sumar" },
    { key: "Dulcito",   emoji: "🍭", label: "Dulcito",   sub: "Le encantan las partes iguales" },
    { key: "Tortita",   emoji: "🎂", label: "Tortita",   sub: "Divide y comparte" },
    { key: "Rosquilla", emoji: "🍩", label: "Rosquilla", sub: "Círculos y porciones" },
    { key: "Pastel",    emoji: "🥧", label: "Pastel",    sub: "Rebanadas perfectas" },
    { key: "Helado",    emoji: "🍦", label: "Helado",    sub: "Dulce y refrescante" },
    { key: "Choco",     emoji: "🍫", label: "Choco",     sub: "Tabletas y barritas" },
];

export const COMPANION_EMOJI: Record<CompanionKey, string> = COMPANIONS
    .reduce((acc, c) => { acc[c.key] = c.emoji; return acc; }, {} as Record<CompanionKey, string>);

export const getEmoji = (key?: string, fallback: string = "✨") =>
    (key && COMPANION_EMOJI[key as CompanionKey]) || fallback;

export const getCompanionByKey = (key?: string) =>
    COMPANIONS.find(c => c.key === key);
