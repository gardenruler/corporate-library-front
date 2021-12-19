import '@emotion/react';
import theme from 'src/styles/theme';

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
