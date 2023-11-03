import { defineConfig, presetUno } from "unocss";

export default defineConfig({
    theme: {
        colors: {
            primary: "#75DAB4",
            "gray-trans": "#16161694",
        },
    },
    presets: [presetUno()],
    shortcuts: {
        cont: "max-w-1440px px-15 mx-auto max-md:px-10",
    },
});
