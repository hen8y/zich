/** @type {import('tailwindcss').Config} */
import {
    hairlineWidth
} from 'nativewind/theme';
import {
    APP
} from './constants';

module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            borderWidth: {
                hairline: hairlineWidth,
            },
            colors: {
                primary: APP.PRIMARY_COLOR || "#262626",
                secondary: APP.SECONDARY_COLOR || "#e5e5e5",
                theme: APP.THEME_COLOR || '#ffffff'
            },
            fontFamily: {
                'space-mono': 'SpaceMono',
            },
        },
    },
    plugins: [],
}
