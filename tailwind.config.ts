import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 60px rgba(15, 23, 42, 0.12)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(99,102,241,0.16), transparent 36%)'
      }
    }
  },
  plugins: []
};

export default config;
