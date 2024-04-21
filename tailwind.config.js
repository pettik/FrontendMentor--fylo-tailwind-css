module.exports = {
  content: ['./*.html'],
  darkMode: 'class',
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        darkBlue: 'hsl(217,28%,15%)',
        darkBlue1: 'hsl(218,28%,13%)',
        darkBlue2: 'hsl(218,53%,9%)',
        darkBlue3: 'hsl(218,30%,18%)',
        accentCyan: 'hsl(176, 68%, 64%)',
        lightRed: 'hsl(0,100%,63%)',
      },
      backgroundImage: (theme) => ({
        'logo-dark-mode': "url('../images/logo-dark-mode.svg')",
        'logo-light-mode': "url('../images/logo-light-mode.svg')",
        'curvy-dark-mode': "url('../images/bg-curvy-light-mode.svg')",
        'curvy-light-mode': "url('../images/bg-curvy-light-mode.svg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [],
};
