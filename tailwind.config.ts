import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './sections/**/*.{ts,tsx}',
    './forms/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
    './config/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#080B0A',
        graphite: '#101713',
        card: '#151C22',
        elevated: '#1A2428',
        lime: '#C6FF4D',
        cyan: '#71D9F8',
        'primary-text': '#EAF0F4',
        'secondary-text': '#A7B2B4',
        muted: '#748286',
        border: 'rgba(234,240,244,0.12)',
        success: '#34D399',
        error: '#F87171',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        grotesk: ['var(--font-space-grotesk)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      borderRadius: {
        lg: '16px',
        xl: '20px',
        '2xl': '28px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config