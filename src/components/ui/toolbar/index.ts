import { cva, type VariantProps } from 'class-variance-authority';

export { default as Toolbar } from './Toolbar.vue';
export const toolbarVariants = cva('relative flex min-h-12 w-full flex-nowrap items-center px-3 py-0', {
  variants: {
    inset: {
      true: 'pl-14',
      false: '',
    },
  },
  defaultVariants: {
    inset: false,
  },
});

export type ToolbarVariants = VariantProps<typeof toolbarVariants>;

export { default as ToolbarTitle } from './ToolbarTitle.vue';
export const toolbarTitleVariants = cva('relative flex overflow-hidden px-3 py-0 text-xl overflow-ellipsis whitespace-nowrap', {
  variants: {
    shrink: {
      true: 'max-w-auto w-auto min-w-0 flex-[0_1_auto]',
      false: 'max-w-full min-w-0.25 flex-[1_1_0%]',
    },
  },
  defaultVariants: {
    shrink: false,
  },
});

export type ToolbarTitleVariants = VariantProps<typeof toolbarTitleVariants>;
