import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // === TOKENS DE COLOR ===
      colors: {
        // Paleta Institucional ISCOR
        primary: {
          50: '#E6F0FF',
          100: '#CCE1FF',
          200: '#99C3FF',
          300: '#66A5FF',
          400: '#3387FF',
          500: '#003366', // Azul principal institucional
          600: '#002952',
          700: '#001F3D',
          800: '#001529',
          900: '#000B14',
          DEFAULT: '#003366',
        },
        white: {
          DEFAULT: '#FFFFFF',
        },
        gray: {
          50: '#F5F5F5', // Gris claro institucional
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#BABABA',
          400: '#A3A3A3',
          500: '#8C8C8C',
          600: '#757575',
          700: '#5E5E5E',
          800: '#474747',
          900: '#333333', // Gris oscuro institucional
          DEFAULT: '#333333',
        },
        accent: {
          50: '#FFFDF0',
          100: '#FFFBE0',
          200: '#FFF7C1',
          300: '#FFF3A2',
          400: '#FFEF83',
          500: '#FFD700', // Dorado institucional
          600: '#E6C200',
          700: '#CCAD00',
          800: '#B39900',
          900: '#998500',
          DEFAULT: '#FFD700',
        },
        // Colores de Marca (mantener compatibilidad)
        brand: {
          50: '#E6F0FF',
          100: '#CCE1FF',
          200: '#99C3FF',
          300: '#66A5FF',
          400: '#3387FF',
          500: '#003366',
          600: '#002952',
          700: '#001F3D',
          800: '#001529',
          900: '#000B14',
        },
        // Colores de Texto
        ink: {
          DEFAULT: 'var(--ink)',
          2: 'var(--ink-2)',
          3: 'var(--ink-3)',
          4: 'var(--ink-4)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          2: 'var(--muted-2)',
          3: 'var(--muted-3)',
        },
        // Colores de Fondo
        bg: {
          DEFAULT: 'var(--bg)',
          2: 'var(--bg-2)',
        },
        surface: {
          DEFAULT: 'var(--surface)',
          2: 'var(--surface-2)',
        },
        card: {
          DEFAULT: 'var(--card)',
          2: 'var(--card-2)',
        },
        // Colores de Estado
        success: {
          50: 'var(--success-50)',
          100: 'var(--success-100)',
          500: 'var(--success-500)',
          600: 'var(--success-600)',
          700: 'var(--success-700)',
          DEFAULT: 'var(--success)',
        },
        warning: {
          50: 'var(--warning-50)',
          100: 'var(--warning-100)',
          500: 'var(--warning-500)',
          600: 'var(--warning-600)',
          700: 'var(--warning-700)',
          DEFAULT: 'var(--warning)',
        },
        danger: {
          50: 'var(--danger-50)',
          100: 'var(--danger-100)',
          500: 'var(--danger-500)',
          600: 'var(--danger-600)',
          700: 'var(--danger-700)',
          DEFAULT: 'var(--danger)',
        },
        info: {
          50: 'var(--info-50)',
          100: 'var(--info-100)',
          500: 'var(--info-500)',
          600: 'var(--info-600)',
          700: 'var(--info-700)',
          DEFAULT: 'var(--info)',
        },
      },
      
      // === TOKENS DE TIPOGRAFÍA ===
      fontFamily: {
        heading: ['var(--font-heading)', 'Inter', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'Consolas', 'monospace'],
      },
      
      fontSize: {
        xs: ['var(--text-xs)', { lineHeight: 'var(--leading-tight)' }],
        sm: ['var(--text-sm)', { lineHeight: 'var(--leading-snug)' }],
        base: ['var(--text-base)', { lineHeight: 'var(--leading-normal)' }],
        lg: ['var(--text-lg)', { lineHeight: 'var(--leading-relaxed)' }],
        xl: ['var(--text-xl)', { lineHeight: 'var(--leading-relaxed)' }],
        '2xl': ['var(--text-2xl)', { lineHeight: 'var(--leading-tight)' }],
        '3xl': ['var(--text-3xl)', { lineHeight: 'var(--leading-tight)' }],
        '4xl': ['var(--text-4xl)', { lineHeight: 'var(--leading-tight)' }],
        '5xl': ['var(--text-5xl)', { lineHeight: 'var(--leading-none)' }],
        '6xl': ['var(--text-6xl)', { lineHeight: 'var(--leading-none)' }],
        '7xl': ['var(--text-7xl)', { lineHeight: 'var(--leading-none)' }],
        '8xl': ['var(--text-8xl)', { lineHeight: 'var(--leading-none)' }],
        '9xl': ['var(--text-9xl)', { lineHeight: 'var(--leading-none)' }],
      },
      
      fontWeight: {
        thin: 'var(--font-thin)',
        extralight: 'var(--font-extralight)',
        light: 'var(--font-light)',
        normal: 'var(--font-normal)',
        medium: 'var(--font-medium)',
        semibold: 'var(--font-semibold)',
        bold: 'var(--font-bold)',
        extrabold: 'var(--font-extrabold)',
        black: 'var(--font-black)',
      },
      
      lineHeight: {
        none: 'var(--leading-none)',
        tight: 'var(--leading-tight)',
        snug: 'var(--leading-snug)',
        normal: 'var(--leading-normal)',
        relaxed: 'var(--leading-relaxed)',
        loose: 'var(--leading-loose)',
      },
      
      letterSpacing: {
        tighter: 'var(--tracking-tighter)',
        tight: 'var(--tracking-tight)',
        normal: 'var(--tracking-normal)',
        wide: 'var(--tracking-wide)',
        wider: 'var(--tracking-wider)',
        widest: 'var(--tracking-widest)',
      },
      
      // === TOKENS DE ESPACIADO ===
      spacing: {
        0: 'var(--space-0)',
        1: 'var(--space-1)',
        2: 'var(--space-2)',
        3: 'var(--space-3)',
        4: 'var(--space-4)',
        5: 'var(--space-5)',
        6: 'var(--space-6)',
        8: 'var(--space-8)',
        10: 'var(--space-10)',
        12: 'var(--space-12)',
        16: 'var(--space-16)',
        20: 'var(--space-20)',
        24: 'var(--space-24)',
        32: 'var(--space-32)',
        40: 'var(--space-40)',
        48: 'var(--space-48)',
        56: 'var(--space-56)',
        64: 'var(--space-64)',
      },
      
      // === TOKENS DE BORDES ===
      borderRadius: {
        none: 'var(--radius-none)',
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius-base)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        full: 'var(--radius-full)',
      },
      
      borderWidth: {
        0: 'var(--border-0)',
        DEFAULT: 'var(--border)',
        2: 'var(--border-2)',
        4: 'var(--border-4)',
        8: 'var(--border-8)',
      },
      
      // === TOKENS DE SOMBRAS ===
      boxShadow: {
        'brand': 'var(--shadow)',
        'brand-sm': 'var(--shadow-sm)',
        'brand-md': 'var(--shadow-md)',
        'brand-lg': 'var(--shadow-lg)',
        'brand-xl': 'var(--shadow-xl)',
      },
      
      // === TOKENS DE Z-INDEX ===
      zIndex: {
        0: 'var(--z-0)',
        10: 'var(--z-10)',
        20: 'var(--z-20)',
        30: 'var(--z-30)',
        40: 'var(--z-40)',
        50: 'var(--z-50)',
        auto: 'var(--z-auto)',
      },
      
      // === TOKENS DE TRANSICIONES ===
      transitionProperty: {
        'brand': 'all',
        'colors-brand': 'color, background-color, border-color',
        'opacity-brand': 'opacity',
        'shadow-brand': 'box-shadow',
        'transform-brand': 'transform',
      },
      
      transitionDuration: {
        'brand': '150ms',
      },
      
      transitionTimingFunction: {
        'brand': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      
      // === BREAKPOINTS ===
      screens: {
        'sm': 'var(--breakpoint-sm)',
        'md': 'var(--breakpoint-md)',
        'lg': 'var(--breakpoint-lg)',
        'xl': 'var(--breakpoint-xl)',
        '2xl': 'var(--breakpoint-2xl)',
      },
      
      // === ANIMACIONES PERSONALIZADAS ===
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 0.6s ease-in-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [
    // Plugin para utilidades personalizadas
    function({ addUtilities }: any) {
      const newUtilities = {
        '.text-primary': {
          color: '#003366',
        },
        '.bg-primary': {
          backgroundColor: '#003366',
        },
        '.border-primary': {
          borderColor: '#003366',
        },
        '.text-brand': {
          color: '#003366',
        },
        '.bg-brand': {
          backgroundColor: '#003366',
        },
        '.border-brand': {
          borderColor: '#003366',
        },
        '.text-accent': {
          color: '#FFD700',
        },
        '.bg-accent': {
          backgroundColor: '#FFD700',
        },
        '.border-accent': {
          borderColor: '#FFD700',
        },
        '.bg-dark': {
          backgroundColor: 'var(--bg)',
        },
        '.bg-surface': {
          backgroundColor: 'var(--surface)',
        },
        '.bg-card': {
          backgroundColor: 'var(--card)',
        },
        '.text-ink': {
          color: 'var(--ink)',
        },
        '.text-ink-2': {
          color: 'var(--ink-2)',
        },
        '.text-muted': {
          color: 'var(--muted)',
        },
        '.shadow-brand': {
          boxShadow: 'var(--shadow)',
        },
        '.shadow-brand-sm': {
          boxShadow: 'var(--shadow-sm)',
        },
        '.shadow-brand-md': {
          boxShadow: 'var(--shadow-md)',
        },
        '.shadow-brand-lg': {
          boxShadow: 'var(--shadow-lg)',
        },
        '.shadow-brand-xl': {
          boxShadow: 'var(--shadow-xl)',
        },
        '.transition-brand': {
          transition: 'var(--transition-all)',
        },
        '.transition-colors-brand': {
          transition: 'var(--transition-colors)',
        },
        '.focus-ring': {
          '&:focus': {
            outline: '2px solid var(--ring)',
            outlineOffset: '2px',
          },
          '&:focus:not(:focus-visible)': {
            outline: 'none',
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],
}

export default config
