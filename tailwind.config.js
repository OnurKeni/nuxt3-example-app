/** @type {import("tailwindcss").Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    content: [
        `components/**/*.{vue,js}`,
        `layouts/**/*.vue`,
        `pages/**/*.vue`,
        `composables/**/*.{js,ts}`,
        `plugins/**/*.{js,ts}`,
        `App.{js,ts,vue}`,
        `app.{js,ts,vue}`,
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#fff',
            primary: {
                base: '#B88E2F',
                40: '#FFF3E3',
                10: '#E6EBED',
            },
            gray: {
                base: '#3A3A3A',
                40: '#B0B0B0',
                30: '#898989',
                20: '#616161',
            },
            dark: {
                base: '#333',
            },
            light: {
                base: '#F4F5F7',
            }
        },
        extend: {
            fontFamily: {
                poppins: ['Poppins','sans-serif'],
            },
            backgroundImage: {
                'hero': "url('img/banner-background.png')",
            },
            spacing: {
                '22': '88px',
            }
        },
    },
}
