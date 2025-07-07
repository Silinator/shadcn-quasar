import { withThemeByClassName } from '@storybook/addon-themes';
import { Preview, Renderer } from '@storybook/vue3-vite';

import '../src/style.css';

const preview: Preview = {
  parameters: {
    options: {
      panelPosition: 'right',
      storySort: {
        order: [
          'UI',
          [
            'Avatar',
            'Badge',
            'Bar',
            'Button',
            ['Button', 'ButtonGroup'],
            'Chip',
            'Icon',
            'List',
            ['List', 'Item', 'ItemSelection', 'ItemLabel'],
            'Icon',
            'Separator',
            'Spinner',
            ['Spinner', 'OtherSpinner'],
            'Space',
            'Toolbar',
          ],
        ],
        method: 'alphabetical',
      },
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
