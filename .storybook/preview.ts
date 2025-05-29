import { withThemeByClassName } from '@storybook/addon-themes';
import { Preview, Renderer } from '@storybook/vue3-vite';

import '../src/style.css';

const preview: Preview = {
  parameters: {
    options: {
      panelPosition: 'right',
    },
  },
  decorators: [
    withThemeByClassName<Renderer>({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
