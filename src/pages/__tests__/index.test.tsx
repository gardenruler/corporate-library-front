import { ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';
import { render, screen } from '@testing-library/react';

import Home from '../index';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockImplementation(() => ({
  pathname: '/',
}));

describe('Home', () => {
  it('renders a navigation title', () => {
    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>,
    );

    const title = screen.getByText(/okbut/i);

    expect(title).toBeInTheDocument();
  });
});
