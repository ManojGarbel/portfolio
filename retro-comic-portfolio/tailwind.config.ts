import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Retro Comic Theme Colors
        paper: '#F8F3E7',
        ink: '#121212',
        'retro-red': '#C84B31',
        'retro-yellow': '#F2C14E',
        'retro-blue': '#2D7DD2',
        accent: '#0EA5E9',
        'paper-stain': '#E8E0D0',
        'ink-light': '#2A2A2A',
        'retro-red-light': '#E85A3A',
        'retro-yellow-light': '#F5D76E',
        'retro-blue-light': '#4A9AE8',
      },
      fontFamily: {
        'comic': ['Bangers', 'cursive'],
        'comic-alt': ['Comic Neue', 'cursive'],
        'retro': ['Rubik', 'sans-serif'],
        'retro-alt': ['Archivo', 'sans-serif'],
        'system': ['system-ui', 'sans-serif'],
      },
      fontSize: {
        'comic-xs': ['0.75rem', { lineHeight: '1rem' }],
        'comic-sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'comic-base': ['1rem', { lineHeight: '1.5rem' }],
        'comic-lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'comic-xl': ['1.25rem', { lineHeight: '1.75rem' }],
        'comic-2xl': ['1.5rem', { lineHeight: '2rem' }],
        'comic-3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        'comic-4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        'comic-5xl': ['3rem', { lineHeight: '1' }],
        'comic-6xl': ['3.75rem', { lineHeight: '1' }],
        'comic-7xl': ['4.5rem', { lineHeight: '1' }],
        'comic-8xl': ['6rem', { lineHeight: '1' }],
        'comic-9xl': ['8rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'comic': '4px 4px 0px 0px #121212',
        'comic-lg': '6px 6px 0px 0px #121212',
        'comic-xl': '8px 8px 0px 0px #121212',
        'page': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'page-inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'panel': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        'comic': '0.5rem',
        'comic-lg': '0.75rem',
        'comic-xl': '1rem',
        'comic-2xl': '1.5rem',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '5': '5px',
      },
      animation: {
        'page-flip': 'pageFlip 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'corner-fold': 'cornerFold 0.3s ease-out',
        'panel-reveal': 'panelReveal 0.5s ease-out',
        'bounce-comic': 'bounceComic 0.6s ease-out',
        'wiggle': 'wiggle 0.5s ease-in-out',
        'pulse-comic': 'pulseComic 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pageFlip: {
          '0%': { transform: 'rotateY(0deg) scaleX(1)' },
          '50%': { transform: 'rotateY(-90deg) scaleX(0.8)' },
          '100%': { transform: 'rotateY(-180deg) scaleX(1)' },
        },
        cornerFold: {
          '0%': { transform: 'rotateY(0deg) rotateX(0deg)' },
          '100%': { transform: 'rotateY(-15deg) rotateX(5deg)' },
        },
        panelReveal: {
          '0%': { opacity: '0', transform: 'scale(0.8) translateY(20px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        bounceComic: {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0,0,0)' },
          '40%, 43%': { transform: 'translate3d(0, -8px, 0)' },
          '70%': { transform: 'translate3d(0, -4px, 0)' },
          '90%': { transform: 'translate3d(0, -2px, 0)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        pulseComic: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      backgroundImage: {
        'halftone': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIwLjA0Ii8+Cjwvc3ZnPgo=')",
        'paper-grain': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjhGM0U3Ii8+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMF8xKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzBfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTAwIiB5Mj0iMTAwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkZGRkYiIHN0b3Atb3BhY2l0eT0iMC4wMiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC4wMSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=')",
        'comic-dots': "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)",
      },
      backdropBlur: {
        'comic': '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}

export default config