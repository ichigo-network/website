const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      foreground: 'var(--color-foreground)',
      background: 'var(--color-background)',
      primary: 'var(--color-primary)',
      wash: {
        background: 'var(--color-wash-background)',
        muted: 'var(--color-wash-muted)'
      }
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      japanese: ['"M PLUS 1p"', '"ヒラギノ角ゴ ProN"', '"Hiragino Kaku Gothic ProN"', '游ゴシック', '游ゴシック体', 'yugothic', '"Yu Gothic"', 'メイリオ', 'meiryo', '"ＭＳ ゴシック"',
        '"MS Gothic"', 'hirakakupron-w3', 'TakaoExゴシック', 'takaoexgothic', 'MotoyaLCedar', '"Droid Sans Japanese"', 'sans-serif'
      ]
    }
  },
  plugins: [
    plugin(({
      addBase,
      addUtilities
    }) => {
      addBase({
        ':root': {
          '--color-primary': 'hsl(272deg 51% 54%)',
          '--color-foreground': 'hsl(260deg 25% 11%)',
          '--color-background': 'hsl(300deg 20% 99%)',
          '--color-wash-muted': 'hsl(252deg 4% 44.8%)',
          '--color-wash-background': 'hsl(294deg 5.5% 95.3%)'
        }
      })
      addUtilities({
        '.dark-mode': {
          '--color-primary': 'hsl(272deg 51% 54%)',
          '--color-foreground': 'hsl(256deg 6% 93.2%)',
          '--color-background': 'hsl(246deg 6% 9%)',
          '--color-wash-muted': 'hsl(253deg 4% 63.7%)',
          '--color-wash-background': 'hsl(241deg 5% 14.3%)'
        }
      })
    })
  ],
  purge: {
    content: [
      './src/**/*.{vue}'
    ],
    safelist: [
      'dark-mode'
    ]
  }
}
