// hero.ts
import { heroui } from "@heroui/react";
export default heroui({
    themes: {
        light: {
            // ...
            colors: {

                primary: "#1337EC",
                danger: "#DC2626",
                // ألوان semantic أخرى إذا تحتاج
            },
        },
        dark: {
            // ...
            colors: {
                primary: "#1337EC",
                danger: "#DC2626",
            },
        },
        // ... custom themes
    },
});
