export const size = {
  largest: '75em', // 1200px
  large: '56.25em', // 900px
  medium: '37.5em', // 600px
  small: '31.25em', // 500px
  smallest: '25em', // 400px
};

const theme = {
  color: {
    green50: '#e0f5eb',
    green100: '#b3e6cc',
    green200: '#80d5aa',
    green300: '#4dc488',
    green400: '#26b86f',
    green500: '#00ab55',
    green600: '#00a44e',
    green700: '#009a44',
    green800: '#00913b',
    green900: '#00802a',
    greenA100: '#adffc1',
    greenA200: '#7aff9b',
    greenA400: '#47ff74',
    greenA700: '#2eff61',
    red50: '#ffe9e8',
    red100: '#ffc8c6',
    red200: '#ffa4a1',
    red300: '#ff7f7b',
    red400: '#ff635e',
    red500: '#ff4842',
    red600: '#ff413c',
    red00: '#ff3833',
    red800: '#ff302b',
    red900: '#ff211d',
    redA100: '#ffffff',
    redA200: '#ffffff',
    redA400: '#ffcece',
    redA700: '#ffb5b4',
    blueGray50: '#e4e6e7',
    blueGray100: '#bcbfc3',
    blueGray200: '#90959b',
    blueGray300: '#646b72',
    blueGray400: '#424b54',
    blueGray500: '#212b36',
    blueGray600: '#1d2630',
    blueGray700: '#182029',
    blueGray800: '#141a22',
    blueGray900: '#0b1016',
    blueGrayA100: '#59a0ff',
    blueGrayA200: '#2683ff',
    blueGrayA400: '#0068f2',
    blueGrayA700: '#005dd9',
    white: '#ffffff',
    black: '#000000',
  },
  mq: {
    laptop: `@media only screen and (min-width: ${size.largest})`,
    tablet: `@media only screen and (min-width: ${size.large})`,
    mobile: `@media only screen and (min-width: ${size.small})`,
  },
};

export default theme;
