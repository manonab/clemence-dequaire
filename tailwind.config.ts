import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                mainColor: "#FCF6EF",
                grayBlack: "#201F20",
            },
            fontFamily: {
                clash: ["Clash"],
                clashBold: ["Clash-Bold"],
                clashMedium: ["Clash-Medium"],
                clashExtra: ["Clash-Extra"],
                clashSemibold: ["Clash-Semibold"],
                clashLight: ["Clash-Light"],
                kate: ["kate"],
                kateMedium: ["kate-medium"],
                kateBlak: ["kate-black"],
            },
        },
    },
    plugins: [],
};
export default config;
