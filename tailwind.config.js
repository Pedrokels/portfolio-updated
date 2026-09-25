/** @type {import('tailwindcss').Config} */

// Every color resolves to a CSS variable defined in src/style.css,
// so light/dark is a single token swap rather than per-component `dark:` classes.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: token('background'),
        foreground: token('foreground'),
        muted: token('muted'),
        faint: token('faint'),
        border: token('border'),
        'border-strong': token('border-strong'),
        surface: token('surface'),
        'surface-2': token('surface-2')
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif'
        ]
      },
      // Type scale — hierarchy comes from size, weight and tracking, not color.
      fontSize: {
        label: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.08em' }],
        display: ['clamp(2.75rem, 8vw, 5.75rem)', { lineHeight: '0.98', letterSpacing: '-0.045em' }],
        title: ['clamp(2rem, 4.5vw, 3.25rem)', { lineHeight: '1.05', letterSpacing: '-0.035em' }],
        heading: ['clamp(1.375rem, 2.2vw, 1.75rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        lead: ['clamp(1.0625rem, 1.6vw, 1.25rem)', { lineHeight: '1.6', letterSpacing: '-0.01em' }]
      },
      maxWidth: {
        site: '75rem',
        prose: '40rem'
      },
      // Restrained radius: 4 / 6 / 8. Nothing rounder except the theme dot.
      borderRadius: {
        sm: '4px',
        DEFAULT: '6px',
        md: '8px'
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)'
      },
      transitionDuration: {
        fast: '200ms',
        normal: '400ms',
        slow: '700ms'
      }
    }
  },
  plugins: []
}
