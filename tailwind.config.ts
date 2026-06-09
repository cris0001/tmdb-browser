import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

const config: Config = {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [forms, typography],
}

export default config