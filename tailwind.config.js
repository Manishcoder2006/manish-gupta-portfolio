/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          emerald: '#059669',
          'emerald-light': '#10B981',
          orange: '#FF6B2B',
          'orange-dark': '#EA580C',
          navy: '#060A16',
          'navy-card': '#111728'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace', 'ui-monospace']
      }
    },
  },
  plugins: [],
}
