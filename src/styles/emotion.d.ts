import '@emotion/react';
import theme from 'src/styles/theme';

type ColorKey = 'green' | 'rend' | 'blueGray';
type Key = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'A100' | 'A200' | 'A400' | 'A700';

declare module '@emotion/react' {
  export interface Theme {
    color: typeof theme.color;
    mq: {
      laptop: string;
      tablet: string;
      mobile: string;
    };
  }
}
