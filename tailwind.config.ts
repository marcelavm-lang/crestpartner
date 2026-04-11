import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#2574A7',
        teal: '#00A79D',
        muted: '#5A6A7A',
        'gray-light': '#F4F7FA',
        'gray-mid': '#E8EDF2',
        border: '#D8E2EA',
      },
      fontFamily: {
        spartan: ['var(--font-spartan)', 'sans-serif'],
      },
      borderRadius: {
        card: '10px',
        badge: '8px',
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
