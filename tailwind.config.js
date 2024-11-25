/** @type {import('tailwindcss').Config} */
import { APP } from '@/constants';
import { hairlineWidth } from 'nativewind/theme';

module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            borderWidth: {
                hairline: hairlineWidth,
            },
            colors: {
                primary: `var(${APP.PRIMARY_COLOR}, #262626)`,
                secondary: `var(${APP.SECONDARY_COLOR}, #d4d4d4)`,
            },
            fontFamily: {
                'space-mono': 'SpaceMono',
            },
        },
    },
    plugins: [],
}
