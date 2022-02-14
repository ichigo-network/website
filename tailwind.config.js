const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  theme: {
    boxShadow: {
      lg: '0 1px 16px 0px rgba(0, 0, 0, 0.05)',
    },
    colors: {
      background: 'var(--color-background)',
      current: 'currentColor',
      gray: {
        50: 'var(--color-gray-50)',
        100: 'var(--color-gray-100)',
        200: 'var(--color-gray-200)',
        300: 'var(--color-gray-300)',
        400: 'var(--color-gray-400)',
        500: 'var(--color-gray-500)',
        600: 'var(--color-gray-600)',
        700: 'var(--color-gray-700)',
        800: 'var(--color-gray-800)',
        900: 'var(--color-gray-900)',
      },
      primary: {
        50: 'var(--color-primary-50)',
        100: 'var(--color-primary-100)',
        200: 'var(--color-primary-200)',
        300: 'var(--color-primary-300)',
        400: 'var(--color-primary-400)',
        500: 'var(--color-primary-500)',
        600: 'var(--color-primary-600)',
        700: 'var(--color-primary-700)',
        800: 'var(--color-primary-800)',
        900: 'var(--color-primary-900)',
      },
      secondary: {
        50: 'var(--color-primary-50)',
        100: 'var(--color-primary-100)',
        200: 'var(--color-primary-200)',
        300: 'var(--color-primary-300)',
        400: 'var(--color-primary-400)',
        500: 'var(--color-primary-500)',
        600: 'var(--color-primary-600)',
        700: 'var(--color-primary-700)',
        800: 'var(--color-primary-800)',
        900: 'var(--color-primary-900)',
      },
      transparent: 'transparent',
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      japanese: ['"M PLUS 1p"', '"ヒラギノ角ゴ ProN"', '"Hiragino Kaku Gothic ProN"', '游ゴシック', '游ゴシック体', 'yugothic', '"Yu Gothic"', 'メイリオ', 'meiryo', '"ＭＳ ゴシック"',
        '"MS Gothic"', 'hirakakupron-w3', 'TakaoExゴシック', 'takaoexgothic', 'MotoyaLCedar', '"Droid Sans Japanese"', 'sans-serif',
      ],
    },
  },
  plugins: [
    plugin(({
      addBase,
    }) => {
      addBase({
        ':root': {
          '--color-background': colors.white,

          '--color-gray-50': colors.gray['50'],
          '--color-gray-100': colors.gray['100'],
          '--color-gray-200': colors.gray['200'],
          '--color-gray-300': colors.gray['300'],
          '--color-gray-400': colors.gray['400'],
          '--color-gray-500': colors.gray['500'],
          '--color-gray-600': colors.gray['600'],
          '--color-gray-700': colors.gray['700'],
          '--color-gray-800': colors.gray['800'],
          '--color-gray-900': colors.gray['900'],

          '--color-primary-50': colors.green['50'],
          '--color-primary-100': colors.green['100'],
          '--color-primary-200': colors.green['200'],
          '--color-primary-300': colors.green['300'],
          '--color-primary-400': colors.green['400'],
          '--color-primary-500': colors.green['500'],
          '--color-primary-600': colors.green['600'],
          '--color-primary-700': colors.green['700'],
          '--color-primary-800': colors.green['800'],
          '--color-primary-900': colors.green['900'],

          '--color-secondary-50': colors.rose['50'],
          '--color-secondary-100': colors.rose['100'],
          '--color-secondary-200': colors.rose['200'],
          '--color-secondary-300': colors.rose['300'],
          '--color-secondary-400': colors.rose['400'],
          '--color-secondary-500': colors.rose['500'],
          '--color-secondary-600': colors.rose['600'],
          '--color-secondary-700': colors.rose['700'],
          '--color-secondary-800': colors.rose['800'],
          '--color-secondary-900': colors.rose['900'],
        },
      });
    }),
  ],
  purge: {
    content: [
      './src/**/*.{vue}',
    ],
    safelist: [
      'dark-mode',
    ],
  },
};
