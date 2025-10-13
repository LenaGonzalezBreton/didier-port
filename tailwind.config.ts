import type { Config } from 'tailwindcss'

export default {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#361147',
                accent:  '#B388EB',
                sand:    '#F6F4F2',
                ink:     '#0F0E12',
                muted:   '#E8E2EE',
            },
            borderRadius: {
                '2xl': '1.25rem',
            },
            boxShadow: {
                soft:  '0 6px 24px rgba(0,0,0,.08)',
                hover: '0 10px 30px rgba(0,0,0,.12)',
            },
        },
    },
    plugins: [],
} satisfies Config
